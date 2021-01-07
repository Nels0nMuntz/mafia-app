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
                        id: action.payload.uniqueId,
                        count: 1,
                        price: action.payload.selectedSize.discount ?? action.payload.selectedSize.price,
                        weight: action.payload.selectedSize.weight,
                        title: action.payload.title,
                        imageUrl: action.payload.smallImageUrl,
                        gift: action.payload.selectedGift === 'Без подарка' ? null : action.payload.selectedGift,
                        additions: action.payload.additions,
                    }
                ],
            };
        case REMOVE_PRODUCT:
            const newState = {
                ...state,
                selected: state.selected.filter(elem => elem.id !== action.payload),
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
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                count: ++item.count
                            }
                        }
                        return { ...item }
                    })
                ],
            };
        case DECREASE_COUNT:
            return {
                ...state,
                selected: [
                    ...state.selected.map(item => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                count: --item.count
                            }
                        }
                        return { ...item }
                    })
                ]
            };
        case RECALCULATE_TOTAL:
            const recalculated = state.selected.reduce((prev, curr) => {
                prev.totalCount += curr.count + curr.additions.reduce((sum, next) => next.selected ? sum + 1 : sum, 0);
                prev.totalPrice += curr.price * curr.count + curr.additions.reduce((sum, next) => next.selected ? sum + next.price : sum, 0);
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
                        return item.id === action.payload.productId ? {
                            ...item,
                            additions: [
                                ...item.additions.map(elem => elem.id === action.payload.additionId ? {...elem, selected: !elem.selected} : {...elem})
                            ]
                        } : {
                            ...item
                        }
                    })
                ]
            };
        case REMOVE_ADDITION:
            return {
                ...state,
                selected: [
                    ...state.selected.map(item => {
                        return item.id === action.payload.productId ? {
                            ...item,
                            additions: [
                                ...item.additions.map(elem => elem.id === action.payload.additionId ? {...elem, selected: false} : {...elem})
                            ]
                        } : {
                            ...item
                        }
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
        default:
            return state;
    }
};

export default cartReducer;

const addProductAC = product => ({ type: ADD_PRODUCT, payload: product });
const removeProductAC = id => ({ type: REMOVE_PRODUCT, payload: id });
const increaseCountAC = id => ({ type: INCREASE_COUNT, payload: id });
const decreaseCountAC = id => ({ type: DECREASE_COUNT, payload: id });
const changeCartAdditionAC = (productId, additionId) => ({ type: CHANGE_CART_ADDITIONS, payload: { productId, additionId } });
const recalculateTotalAC = () => ({ type: RECALCULATE_TOTAL });
const removeAdditionAC = (productId, additionId) => ({ type: REMOVE_ADDITION, payload: { productId, additionId } });

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
export const changeCartAddition = (productId, additionId) => dispatch => {
    dispatch(changeCartAdditionAC(productId, additionId));
    dispatch(recalculateTotalAC());
};
export const clearCart = () => ({ type: CLEAR_CART });
export const removeAddition = (productId, additionId) => dispatch => {
    dispatch(removeAdditionAC(productId, additionId));
    dispatch(recalculateTotalAC());
};