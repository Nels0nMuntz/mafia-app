import { catalogAPI, filterAPI } from '../api/api';

type SET_CATALOG_ITEM = "SET_CATALOG_ITEM"
type SET_SORT_CATEGORIES = "SET_SORT_CATEGORIES"
type SET_FAST_CATEGORIES = "SET_FAST_CATEGORIES"
type CHANGE_SORT_CATEGORY = "CHANGE_SORT_CATEGORY"
type CHANGE_FAST_CATEGORY = "CHANGE_FAST_CATEGORY"
type TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
type TOGGLE_PRODUCT_SIZE = "TOGGLE_PRODUCT_SIZE"
type CHANGE_PRODUCT_SIZE = "CHANGE_PRODUCT_SIZE"
type CHANGE_PRODUCT_GIFT = "CHANGE_PRODUCT_GIFT"
type CHANGE_PRODUCT_STATE = "CHANGE_PRODUCT_STATE"
type SET_CATALOG = "SET_CATALOG"

interface IGift {
    id: number
    content: string
    isSelected: true
};
interface ISize {
    id: number
    value?: "Средняя" | "Большая"
    weight: string
    price: number
    discount: number
    isSelected: boolean
};
interface ITag {
    id: number
    type: "primary" | "secondary"
    content: string
};
interface IBonus {
    id: number
    type: "delivery" | "discount"
    content: string
};
interface IAddition {
    id: number
    title: string
    weight: string
    price: number
    imgUrl: string
    isSelected: boolean
};
export interface IProduct {
    id: Number
    title: string
    description: string[]
    images: {
        bigImageUrl: string
        smallImageUrl: string
    }
    gifts: Array<IGift>
    sizes: Array<ISize>
    category: string
    rate: number
    added: string
    tags: Array<ITag>
    bonuses: Array<IBonus>
    additions: Array<IAddition>
    isReccomended?: boolean
    menuItem: string
    productId: number
    hasTwoSizes: boolean
    hasDiscount: boolean
    hasGifts: boolean
    hasBonuses: boolean
    hasAdditions: boolean
    isSelected: boolean
    uniqueId?: number
    count: number 
};
interface IFastCaregory {
    id: number
    content: string
    type: string
};
interface ISortCategory {
    id: number
    content: string
};
interface IMenuItem {
    title: string
    list: Array<IProduct>
    fastCategories: Array<IFastCaregory>
};
export type InitialState = {
    prods: { [key: string]: IMenuItem }
    sortCategories: Array<ISortCategory>
    fastCategories: Array<IFastCaregory>
    currentSortCategory: string
    currentFastCategory: string
    isFetchingCatalog: boolean
};
type SetCatalogActionType = {
    type: SET_CATALOG
    payload: { [key: string]: IMenuItem }
};
type SetCatalogItemActionType = {
    type: SET_CATALOG_ITEM
    payload: {
        data: IMenuItem
        menuItem: string
    }
};
type SetSortCategoriesActionType = {
    type: SET_SORT_CATEGORIES
    payload: Array<ISortCategory>
};
type SetFastCategoriesActionType = {
    type: SET_FAST_CATEGORIES
    payload: Array<IFastCaregory>
};
type ChangeSortCategoriesActionType = {
    type: CHANGE_SORT_CATEGORY
    payload: string
};
type ChangeFastCategoriesActionType = {
    type: CHANGE_FAST_CATEGORY
    payload: string
};
type ToggleIsFetchingActionType = {
    type: TOGGLE_IS_FETCHING
    payload: boolean
};

const initialState: InitialState = {
    prods: {},
    sortCategories: [],
    fastCategories: [],
    currentSortCategory: '',
    currentFastCategory: 'default',
    isFetchingCatalog: false,
};

const catalogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_CATALOG":
            let res: { [key: string]: IMenuItem } = {}
            for (let prop in action.payload) {
                if (!state.prods[prop]) {
                    res[prop] = {
                        ...action.payload[prop],
                        list: [
                            ...action.payload[prop].list.map((item: any) => (
                                {
                                    ...item,
                                    menuItem: prop,
                                    productId: Math.trunc(Math.random() * Math.random() * Math.random() * Math.random() * item.id * 100000000),
                                    gifts: [
                                        ...item.gifts.map((elem: any, index: number) => (
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
                                        ...item.sizes.map((elem: any, index: number) => (
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
                                        ...item.additions.map((elem: any) => ({ ...elem, isSelected: false }))
                                    ],
                                    hasTwoSizes: item.sizes.length === 2,
                                    hasDiscount: !!item.sizes[0].discount,
                                    hasGifts: !!item.gifts.length,
                                    hasBonuses: !!item.bonuses.length,
                                    hasAdditions: !!item.additions.length,
                                    isSelected: false,
                                    count: 0
                                }
                            ))
                        ]
                    }
                }
            }
            return {
                ...state,
                prods: {
                    ...state.prods,
                    ...res
                }
            }
        case "SET_CATALOG_ITEM":
            return {
                ...state,
                prods: {
                    ...state.prods,
                    [action.payload.menuItem]: {
                        ...action.payload.data,
                        list: [
                            ...action.payload.data.list.map((item: any) => (
                                {
                                    ...item,
                                    menuItem: action.payload.menuItem,
                                    productId: Math.trunc(Math.random() * Math.random() * Math.random() * item.id * item.id * 100000000),
                                    gifts: [
                                        ...item.gifts.map((elem: any, index: number) => (
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
                                        ...item.sizes.map((elem: any, index: number) => (
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
                                        ...item.additions.map((elem: any) => ({ ...elem, isSelected: false }))
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
                }
            };
        case "SET_SORT_CATEGORIES":
            return { ...state, sortCategories: action.payload, };
        case "SET_FAST_CATEGORIES":
            return { ...state, fastCategories: action.payload };
        case "CHANGE_SORT_CATEGORY":
            return { ...state, currentSortCategory: action.payload };
        case "CHANGE_FAST_CATEGORY":
            return { ...state, currentFastCategory: action.payload, };
        case "TOGGLE_IS_FETCHING":
            return { ...state, isFetchingCatalog: action.payload, };
        case "TOGGLE_PRODUCT_SIZE":
            return {
                ...state,
                prods: {
                    ...state.prods,
                    [action.payload.menuItem]: {
                        ...state.prods[action.payload.menuItem],
                        list: [
                            ...state.prods[action.payload.menuItem].list.map(item => {
                                if (item.productId === action.payload.productId) {
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
                }
            };
        case "CHANGE_PRODUCT_SIZE":
            return {
                ...state,
                prods: {
                    ...state.prods,
                    [action.payload.menuItem]: {
                        ...state.prods[action.payload.menuItem],
                        list: [
                            ...state.prods[action.payload.menuItem].list.map(item => {
                                if (item.productId === action.payload.productId) {
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
                }
            };
        case "CHANGE_PRODUCT_GIFT":
            return {
                ...state,
                prods: {
                    ...state.prods,
                    [action.payload.menuItem]: {
                        ...state.prods[action.payload.menuItem],
                        list: [
                            ...state.prods[action.payload.menuItem].list.map(item => {
                                if (item.productId === action.payload.productId) {
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
                }
            };
        case "CHANGE_PRODUCT_STATE":
            return {
                ...state,
                prods: {
                    ...state.prods,
                    [action.payload.menuItem]: {
                        ...state.prods[action.payload.menuItem],
                        list: [
                            ...state.prods[action.payload.menuItem].list.map(item => {
                                if (item.productId === action.payload.productId) {
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
                }
            };
        default:
            return state;
    };
};
export default catalogReducer;

const setCatalogAC = (data: { [key: string]: IMenuItem }): SetCatalogActionType => ({ type: "SET_CATALOG", payload: data })
const setCatalogItemaAC = (data: IMenuItem, menuItem: string): SetCatalogItemActionType => ({ type: "SET_CATALOG_ITEM", payload: { data, menuItem } });
const requestSortCategoriesAC = (categories: Array<ISortCategory>): SetSortCategoriesActionType => ({ type: "SET_SORT_CATEGORIES", payload: categories });
const requestFastCategoriesAC = (categories: Array<IFastCaregory>): SetFastCategoriesActionType => ({ type: "SET_FAST_CATEGORIES", payload: categories });
const changeCurrentSortCategoryAC = (category: string): ChangeSortCategoriesActionType => ({ type: "CHANGE_SORT_CATEGORY", payload: category });
const changeCurrentFastCategoryAC = (category: string): ChangeFastCategoriesActionType => ({ type: "CHANGE_FAST_CATEGORY", payload: category });
const toggleIsFetchingAC = (value = false): ToggleIsFetchingActionType => ({ type: "TOGGLE_IS_FETCHING", payload: value });

export const requestCatalog = () => async (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await catalogAPI.getCatalog();
    dispatch(setCatalogAC(response));
    dispatch(toggleIsFetchingAC(false));
}
export const requestCatalogItem = (menuItem: string) => async (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await catalogAPI.getCatalogItem(menuItem);
    dispatch(setCatalogItemaAC(response, menuItem));
    dispatch(toggleIsFetchingAC(false));
};
export const requestSortCategories = () => async (dispatch: any) => {
    let response = await filterAPI.getSortCategories();
    dispatch(requestSortCategoriesAC(response));
    dispatch(changeCurrentSortCategoryAC(response[0].content));
};
export const requestFastCategories = (menuItem: string) => async (dispatch: any) => {
    let response = await filterAPI.getFastCategories(menuItem);
    dispatch(requestFastCategoriesAC(response));
};
export const changeCurrentSortCategory = (category: string) => (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeCurrentSortCategoryAC(category));
    dispatch(toggleIsFetchingAC(false));
};
export const changeCurrentFastCategory = (category: string) => (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeCurrentFastCategoryAC(category));
    dispatch(toggleIsFetchingAC(false));
};

export const toggleProductSize = (menuItem: string, productId: number): {
    type: TOGGLE_PRODUCT_SIZE
    payload: {
        menuItem: string
        productId: number
    }
} => ({ 
    type: "TOGGLE_PRODUCT_SIZE", 
    payload: { menuItem, productId } 
});

export const changeProductSize = (menuItem: string, productId: number, sizeId: number): { 
    type: CHANGE_PRODUCT_SIZE
    payload: {
        menuItem: string
        productId: number
        sizeId: number
    }
} => ({ 
    type: "CHANGE_PRODUCT_SIZE", 
    payload: { menuItem, productId, sizeId } 
});

export const changeProductGift = (menuItem: string, productId: number, giftId: number): {
    type: CHANGE_PRODUCT_GIFT
    payload: {
        menuItem: string
        productId: number
        giftId: number
    }
} => ({ 
    type: "CHANGE_PRODUCT_GIFT", 
    payload: { menuItem, productId, giftId } 
});

export const changeProductState = (menuItem: string, productId: number, value: boolean): {
    type: CHANGE_PRODUCT_STATE
    payload: {
        menuItem: string
        productId: number
        value: boolean  
    }
} => ({ 
    type: "CHANGE_PRODUCT_STATE", 
    payload: { menuItem, productId, value } 
});