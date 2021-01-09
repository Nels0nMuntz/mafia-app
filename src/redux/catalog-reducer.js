import { catalogAPI, filterAPI } from './../api/api';
import actionTypes from './actionTypes';


const {
    SET_CATALOG_ITEM,
    SET_SORT_CATEGORIES,
    SET_FAST_CATEGORIES,
    CHANGE_SORT_CATEGORY,
    CHANGE_FAST_CATEGORY,
    TOGGLE_IS_FETCHING,

    TOGGLE_PRODUCT_SIZE,
    CHANGE_PRODUCT_SIZE,
    CHANGE_PRODUCT_GIFT,
    CHANGE_PRODUCT_STATE,
    CHANGE_ACTIVE_PRODUCT,
} = actionTypes;

const initialState = {
    sortCategories: [],
    fastCategories: [],
    currentSortCategory: '',
    currentFastCategory: 'default',
    isFetchingCatalog: false,
    isSelectedActiveProduct: null,
};

const getUniqueId = cardData => cardData.title.replace(" ", "").split("").reduce((acc, char) => char.charCodeAt(0) + acc, '');

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOG_ITEM:
            return {
                ...state,
                [action.payload.menuItem]: {
                    ...action.payload.data,
                    list: [
                        ...action.payload.data.list.map(item => (
                            {
                                ...item,
                                uniqueId: getUniqueId(item),
                                count: 0,
                                gifts: [
                                    ...item.gifts.map((elem, index) => (
                                        index === 0 ? {
                                            ...elem,
                                            isSelected: true,
                                        } : {
                                                ...elem,
                                                isSelected: false,
                                            }
                                    ))
                                ],
                                sizes: [
                                    ...item.sizes.map((elem, index) => (
                                        index === 0 ? {
                                            ...elem,
                                            isSelected: true,
                                        } : {
                                                ...elem,
                                                isSelected: false,
                                            }
                                    ))
                                ],
                                additions: [
                                    ...item.additions.map(elem => ({ ...elem, isSelected: false }))
                                ],
                                hasTwoSizes: item.sizes.length === 2,
                                hasDiscount: !!item.sizes[0].discount,
                                hasGifts: !!item.gifts.length,
                                hasBonuses: !!item.bonuses.length,
                                hasAdditions: !!item.additions.length,
                                isSelected: false,
                            }
                        ))
                    ]
                },
            };
        case SET_SORT_CATEGORIES:
            return { ...state, sortCategories: action.payload, };
        case SET_FAST_CATEGORIES:
            return { ...state, fastCategories: action.payload };
        case CHANGE_SORT_CATEGORY:
            return { ...state, currentSortCategory: action.payload };
        case CHANGE_FAST_CATEGORY:
            return { ...state, currentFastCategory: action.payload, };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetchingCatalog: action.payload, };

        case TOGGLE_PRODUCT_SIZE:
            return {
                ...state,
                [action.payload.menuItem]: {
                    ...state[action.payload.menuItem],
                    list: [
                        ...state[action.payload.menuItem].list.map(item => {
                            if (item.uniqueId === action.payload.productId) {
                                return {
                                    ...item,
                                    sizes: [
                                        ...item.sizes.map(size => ({ ...size, isSelected: !size.isSelected }))
                                    ]
                                };
                            } else {
                                return item;
                            }
                        })
                    ]
                }
            };
        case CHANGE_PRODUCT_SIZE:
            return {
                ...state,
                [action.payload.menuItem]: {
                    ...state[action.payload.menuItem],
                    list: [
                        ...state[action.payload.menuItem].list.map(item => {
                            if (item.uniqueId === action.payload.productId) {
                                return {
                                    ...item,
                                    sizes: [
                                        ...item.sizes.map(size => size.id === action.payload.sizeId ? { ...size, isSelected: true } : { ...size, isSelected: false })
                                    ]
                                };
                            } else {
                                return item;
                            }
                        })
                    ]
                }
            };
        case CHANGE_PRODUCT_GIFT:
            return {
                ...state,
                [action.payload.menuItem]: {
                    ...state[action.payload.menuItem],
                    list: [
                        ...state[action.payload.menuItem].list.map(item => {
                            if (item.uniqueId === action.payload.productId) {
                                return {
                                    ...item,
                                    gifts: [
                                        ...item.gifts.map(gift => gift.id === action.payload.giftId ? { ...gift, isSelected: true } : { ...gift, isSelected: false })
                                    ]
                                }
                            } else {
                                return item;
                            }
                        })
                    ]
                }
            };
        case CHANGE_PRODUCT_STATE:
            return {
                ...state,
                [action.payload.menuItem]: {
                    ...state[action.payload.menuItem],
                    list: [
                        ...state[action.payload.menuItem].list.map(item => {
                            if (item.uniqueId === action.payload.productId) {
                                return {
                                    ...item,
                                    isSelected: action.payload.value
                                }
                            } else {
                                return item;
                            }
                        })
                    ]
                }
            };
        case CHANGE_ACTIVE_PRODUCT:
            const isSelected = state[action.payload.menuItem].list.find(item => item.id === action.payload.productId).isSelected;
            return {
                ...state,
                isSelectedActiveProduct: isSelected
            };
        //     return {
        //         ...state,
        //         [action.payload.menuItem]: {
        //             ...state[action.payload.menuItem],
        //             list: [
        //                 ...state[action.payload.menuItem].list.map(item => {
        //                     if (item.id === action.payload.productId) {
        //                         return {
        //                             ...item,
        //                             additions: [
        //                                 ...item.additions.map(elem => elem.id === action.payload.additionId ? { ...elem, isSelected: true } : { ...elem, isSelected: false })
        //                             ]
        //                         }
        //                     }else{
        //                         return item;
        //                     }
        //                 })
        //             ]
        //         }
        //     };

        default:
            return state;
    };
};
export default catalogReducer;

const setCatalogItemaAC = (data, menuItem) => ({ type: SET_CATALOG_ITEM, payload: { data, menuItem } });
const requestSortCategoriesAC = categories => ({ type: SET_SORT_CATEGORIES, payload: categories });
const requestFastCategoriesAC = categories => ({ type: SET_FAST_CATEGORIES, payload: categories });
const changeCurrentSortCategoryAC = category => ({ type: CHANGE_SORT_CATEGORY, payload: category });
const changeCurrentFastCategoryAC = category => ({ type: CHANGE_FAST_CATEGORY, payload: category });
const toggleIsFetchingAC = value => ({ type: TOGGLE_IS_FETCHING, payload: value || false });

export const requestCatalogItem = menuItem => async dispatch => {
    dispatch(toggleIsFetchingAC(true));
    let response = await catalogAPI.getCatalogItem(menuItem);
    dispatch(setCatalogItemaAC(response, menuItem));
    dispatch(toggleIsFetchingAC(false));
};
export const requestSortCategories = () => async dispatch => {
    let response = await filterAPI.getSortCategories();
    dispatch(requestSortCategoriesAC(response));
    dispatch(changeCurrentSortCategoryAC(response[0].content));
};
export const requestFastCategories = (menuItem) => async dispatch => {
    let response = await filterAPI.getFastCategories(menuItem);
    dispatch(requestFastCategoriesAC(response));
};
export const changeCurrentSortCategory = category => dispatch => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeCurrentSortCategoryAC(category));
    dispatch(toggleIsFetchingAC(false));
};
export const changeCurrentFastCategory = category => dispatch => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeCurrentFastCategoryAC(category));
    dispatch(toggleIsFetchingAC(false));
};

export const toggleProductSize = (menuItem, productId) => ({ type: TOGGLE_PRODUCT_SIZE, payload: { menuItem, productId } });
export const changeProductSize = (menuItem, productId, sizeId) => ({ type: CHANGE_PRODUCT_SIZE, payload: { menuItem, productId, sizeId } });
export const changeProductGift = (menuItem, productId, giftId) => ({ type: CHANGE_PRODUCT_GIFT, payload: { menuItem, productId, giftId } });
export const changeProductState = (menuItem, productId, value) => ({ type: CHANGE_PRODUCT_STATE, payload: { menuItem, productId, value } });
export const changeActiveProduct = (menuItem, productId) => ({ type: CHANGE_ACTIVE_PRODUCT, payload: { menuItem, productId } });
// export const changeProductAddition = (menuItem, productId, additionId) => ({ type: CHANGE_PRODUCT_ADDITION, payload: { menuItem, productId, additionId } });