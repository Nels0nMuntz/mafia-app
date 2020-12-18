import actionTypes from './actionTypes';

const {
    CHANGE_POPUP_CART_STATE,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
} = actionTypes;

const initialState = {
    selected: [],
    totalCount: 0,
    totalPrice: 0,
    isPopupCartOpen: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POPUP_CART_STATE:
            return { ...state, isPopupCartOpen: action.payload }
        case ADD_PRODUCT:
            return {
                ...state,
                selected: [
                    ...state.selected,
                    {
                        id: action.payload.idUnique,
                        count: 1,
                        price: action.payload.selectedSize.price,
                        title: action.payload.title,
                        imageUrl: action.payload.smallImageUrl,
                        gift: action.payload.selectedGift === 'Без подарка' ? null : action.payload.selectedGift,
                        addition: action.payload.selectedAddition,
                    }
                ],
                totalCount: ++state.totalCount,
                totalPrice: state.totalPrice + action.payload.selectedSize.price,
            };
        case REMOVE_PRODUCT:
            console.log(action.payload);
            const element = state.selected.find(elem => elem.id === action.payload);
            return {
                ...state,
                selected: state.selected.filter(elem => elem.id !== action.payload),
                totalCount: state.totalCount - element.count,
                totalPrice: state.totalPrice - element.count * element.price,
            };
        default:
            return state;
    }
};

export default cartReducer;

export const changePopupCartState = value => ({ type: CHANGE_POPUP_CART_STATE, payload: value });
export const addProduct = product => ({ type: ADD_PRODUCT, payload: product });
export const removeProduct = id => ({ type: REMOVE_PRODUCT, payload: id });