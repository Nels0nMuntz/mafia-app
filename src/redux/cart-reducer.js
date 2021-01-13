import actionTypes from './actionTypes';

const {
    CHANGE_POPUP_CART_STATE,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INCREASE_COUNT,
    DECREASE_COUNT,
    RECALCULATE_TOTAL,
    CLEAR_CART,
    CHANGE_CART_ADDITIONS,
    REMOVE_ADDITION,
    CHANGE_PRODUCT_GIFT_CART,
} = actionTypes;

const initialState = {
    selected: [],
    deliveryPrice: 50,
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
                        ...action.payload,
                        uniqueId: Math.trunc(Math.random() *  action.payload.id * 10000000),
                        count: 1,
                        isSelected: true,
                    }
                ],
            };
        case REMOVE_PRODUCT:
            const newState = {
                ...state,
                selected: state.selected.filter(elem => elem.uniqueId !== action.payload),
            };
            if (!newState.selected.length) {
                newState.isPopupCartOpen = false;
                document.body.style.overflow = 'auto';
                document.body.style.paddingRight = '0';
            };
            return newState;
        case INCREASE_COUNT:
            return {
                ...state,
                selected: [
                    ...state.selected.map(item => {
                        if (item.uniqueId === action.payload) {
                            return {
                                ...item,
                                count: ++item.count
                            }
                        }
                        return item
                    })
                ],
            };
        case DECREASE_COUNT:
            return {
                ...state,
                selected: [
                    ...state.selected.map(item => {
                        if (item.uniqueId === action.payload) {
                            return {
                                ...item,
                                count: --item.count
                            }
                        }
                        return item
                    })
                ]
            };
        case RECALCULATE_TOTAL:
            const recalculated = state.selected.reduce((prev, curr) => {
                prev.totalCount += curr.count + curr.additions.reduce((sum, next) => next.isSelected ? sum + 1 : sum, 0);
                prev.totalPrice += curr.sizes.find(item => item.isSelected).price * curr.count + curr.additions.reduce((sum, next) => next.isSelected ? sum + next.price : sum, 0);
                return prev
            }, {
                totalCount: 0,
                totalPrice: 0,
            });
            return {
                ...state,
                totalCount: recalculated.totalCount,
                totalPrice: recalculated.totalPrice,
            };
        case CHANGE_CART_ADDITIONS:
            return {
                ...state,
                selected: [
                    ...state.selected.map(item => {
                        return item.uniqueId === action.payload.uniqueId ? 
                        {
                            ...item,
                            additions: [
                                ...item.additions.map(elem => elem.id === action.payload.additionId ? { ...elem, isSelected: !elem.isSelected } : elem )
                            ]
                        } : item
                    })
                ]
            };
        case REMOVE_ADDITION:
            return {
                ...state,
                selected: [
                    ...state.selected.map(item => {
                        return item.uniqueId === action.payload.uniqueId ? 
                        {
                            ...item,
                            additions: [
                                ...item.additions.map(elem => elem.id === action.payload.additionId ? { ...elem, isSelected: false } : { ...elem })
                            ]
                        } : item
                    })
                ]
            };
        case CLEAR_CART:
            return {
                ...state,
                selected: [],
                totalCount: 0,
                totalPrice: 0,
            };
        case CHANGE_PRODUCT_GIFT_CART:
            return {
                ...state,
                selected: [
                    ...state.selected.map(item => {
                        if (item.uniqueId === action.payload.uniqueId) {
                            return {
                                ...item,
                                gifts: [
                                    ...item.gifts.map(elem => elem.id === action.payload.giftId ? { ...elem, isSelected: true } : { ...elem, isSelected: false })
                                ]
                            };
                        } else {
                            return item;
                        }
                    })
                ]
            };
        default:
            return state;
    }
};

export default cartReducer;

const addProductAC = product => ({ type: ADD_PRODUCT, payload: product });
const removeProductAC = id => ({ type: REMOVE_PRODUCT, payload: id });
const increaseCountAC = id => ({ type: INCREASE_COUNT, payload: id });
const decreaseCountAC = id => ({ type: DECREASE_COUNT, payload: id });
const changeCartAdditionAC = (uniqueId, additionId) => ({ type: CHANGE_CART_ADDITIONS, payload: { uniqueId, additionId } });
const recalculateTotalAC = () => ({ type: RECALCULATE_TOTAL });
const removeAdditionAC = (uniqueId, additionId) => ({ type: REMOVE_ADDITION, payload: { uniqueId, additionId } });

export const changePopupCartState = value => ({ type: CHANGE_POPUP_CART_STATE, payload: value });
export const addProduct = product => dispatch => {
    dispatch(addProductAC(product));
    dispatch(recalculateTotalAC());
};
export const removeProduct = id => dispatch => {
    dispatch(removeProductAC(id));
    dispatch(recalculateTotalAC());
};
export const increaseCount = id => dispatch => {
    dispatch(increaseCountAC(id));
    dispatch(recalculateTotalAC());
};
export const decreaseCount = id => dispatch => {
    dispatch(decreaseCountAC(id));
    dispatch(recalculateTotalAC());
};
export const clearCart = () => ({ type: CLEAR_CART });
export const changeAddition = (uniqueId, additionId) => dispatch => {
    dispatch(changeCartAdditionAC(uniqueId, additionId));
    dispatch(recalculateTotalAC());
};
export const removeAddition = (uniqueId, additionId) => dispatch => {
    dispatch(removeAdditionAC(uniqueId, additionId));
    dispatch(recalculateTotalAC());
};
export const changeProductGiftCart = (uniqueId, giftId) => ({ type: CHANGE_PRODUCT_GIFT_CART, payload: { uniqueId, giftId } });