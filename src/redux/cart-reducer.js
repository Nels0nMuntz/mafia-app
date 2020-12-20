import actionTypes from './actionTypes';

const {
    CHANGE_POPUP_CART_STATE,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INCREASE_COUNT,
    DECREASE_COUNT,
    RECALCULATE_TOTAL,
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
                        id: action.payload.uniqueId,
                        count: 1,
                        price: action.payload.selectedSize.discount ?? action.payload.selectedSize.price,
                        title: action.payload.title,
                        imageUrl: action.payload.smallImageUrl,
                        gift: action.payload.selectedGift === 'Без подарка' ? null : action.payload.selectedGift,
                        addition: action.payload.selectedAddition,
                    }
                ],
                // totalCount: ++state.totalCount,
                // totalPrice: state.totalPrice + (action.payload.selectedSize.discount ?? action.payload.selectedSize.price),
            };
        case REMOVE_PRODUCT:
            // const element = state.selected.find(elem => elem.id === action.payload);
            const newState = {
                ...state,
                selected: state.selected.filter(elem => elem.id !== action.payload),
                // totalCount: state.totalCount - element.count,
                // totalPrice: state.totalPrice - element.count * element.price,
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
                // totalCount: ++state.totalCount,
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
                prev.totalCount += curr.count;
                prev.totalPrice += curr.price * curr.count;
                return prev
            }, {
                totalCount: 0,
                totalPrice: 0,
            });
            return {
                ...state,
                totalCount: recalculated.totalCount,
                totalPrice: recalculated.totalPrice,
            }
        default:
            return state;
    }
};

export default cartReducer;

const addProductAC = product => ({ type: ADD_PRODUCT, payload: product });
const removeProductAC = id => ({ type: REMOVE_PRODUCT, payload: id });
const increaseCountAC = id => ({ type: INCREASE_COUNT, payload: id });
const decreaseCountAC = id => ({ type: DECREASE_COUNT, payload: id });
const recalculateTotalAC = () => ({type: RECALCULATE_TOTAL});

export const changePopupCartState = value => ({ type: CHANGE_POPUP_CART_STATE, payload: value });
export const addProduct = product => dispatch => {
    console.log(product);
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