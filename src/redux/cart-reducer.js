import actionTypes from './actionTypes';

const { 
    CHANGE_POPUP_CART_STATE, 
} = actionTypes;

const initialState = {
    selected: [],
    isPopupCartOpen: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POPUP_CART_STATE:
            return {...state, isPopupCartOpen: action.payload}    
        default:
            return state;
    }
};

export default cartReducer;

export const changePopupCartState = value => ({type: CHANGE_POPUP_CART_STATE, payload: value});