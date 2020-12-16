import actionTypes from './actionTypes';

const { 
    TOGGLE_POPUP_CART, 
} = actionTypes;

const initialState = {
    isPopupCartOpen: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_POPUP_CART:
            return {...state, isPopupCartOpen: !state.isPopupCartOpen}    
        default:
            return state;
    }
};

export default cartReducer;

export const togglePopupCart = () => ({type: TOGGLE_POPUP_CART});