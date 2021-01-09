import actionTypes from './actionTypes';

const {
    SET_PRODUCT_PAGE,
    SET_PRODUCT_SIZE,
    SET_PRODUCT_GIFT,
    CHANGE_PRODUCT_ADDITION,
} = actionTypes;

const initialState = {};

const productPageReducer = (state = initialState, action) => {

    const getUniqueId = cardData => cardData.title.replace(" ", "").split("").reduce((acc, char) => char.charCodeAt(0) + acc, '');

    switch (action.type) {
        case SET_PRODUCT_PAGE:
            return {
                ...state,
                product: {
                    id: action.payload.id,
                    uniqueId: getUniqueId(action.payload),
                    title: action.payload.title,
                    description: action.payload.description,
                    smallImageUrl: action.payload.images.smallImageUrl,
                    gifts: action.payload.gifts,
                    sizes: action.payload.sizes,
                    tags: action.payload.tags,
                    bonuses: action.payload.bonuses,
                    additions: [
                        ...action.payload.additionals.map(item => ({ ...item, selected: false }))
                    ],
                    hasTwoSizes: action.payload.sizes.length === 2,
                    hasDiscount: !!action.payload.sizes[0].discount,
                    hasGifts: !!action.payload.gifts.length,
                    hasBonuses: !!action.payload.bonuses.length,
                    hasAdditions: !!action.payload.additionals.length,
                    checkbox: false,
                    prevButton: null,
                    selectedSize: {
                        weight: action.payload.sizes[0].weight,
                        price: action.payload.sizes[0].price,
                        discount: action.payload.sizes[0].discount,
                    },
                    selectedGift: action.payload.gifts[0],
                    isSelected: action.payload.isSelected,
                }
            };
        case SET_PRODUCT_SIZE:
            return {
                ...state,
                product: {
                    ...state.product,
                    selectedSize: {
                        weight: action.payload.weight,
                        price: action.payload.price,
                        discount: action.payload.discount,
                    },
                    checkbox: action.payload.checkbox,
                    prevButton: action.payload.button,
                }
            };
        case SET_PRODUCT_GIFT:
            return {
                ...state,
                product: {
                    ...state.product,
                    selectedGift: action.payload                    
                }
            };
        case CHANGE_PRODUCT_ADDITION:
            return {
                ...state,
                product: {
                    ...state.product,
                    additions: [
                        ...state.product.additions.map(item => item.id === action.payload ? { ...item, selected: !item.selected } : { ...item })
                    ]
                }                
            };
        default:
            return state;
    };
};
export default productPageReducer;

export const setProductPage = product => ({ type: SET_PRODUCT_PAGE, payload: product });
export const setSize = (weight, price, discount, checkbox, button) => ({ type: SET_PRODUCT_SIZE, payload: { weight, price, discount, checkbox, button } });
export const setGift = value => ({ type: SET_PRODUCT_GIFT, payload: value });
export const changeProductPageAddition = id => ({ type: CHANGE_PRODUCT_ADDITION, payload: id });