import { IProduct } from './catalog-reducer'

type ADD_PRODUCT = "ADD_PRODUCT";
type CHANGE_CART_ADDITIONS = "CHANGE_CART_ADDITIONS";
type CHANGE_POPUP_CART_STATE = "CHANGE_POPUP_CART_STATE";
type CHANGE_PRODUCT_GIFT_CART = "CHANGE_PRODUCT_GIFT_CART";
type CLEAR_CART = "CLEAR_CART";
type DECREASE_COUNT = "DECREASE_COUNT";
type INCREASE_COUNT = "INCREASE_COUNT";
type RECALCULATE_TOTAL = "RECALCULATE_TOTAL";
type REMOVE_ADDITION = "REMOVE_ADDITION";
type REMOVE_PRODUCT = "REMOVE_PRODUCT";

export type InitialStateType = {
    selected: Array<IProduct>
    deliveryPrice: number
    totalCount: number
    totalPrice: number
    isPopupCartOpen: boolean
}

const initialState: InitialStateType = {
    selected: [],
    deliveryPrice: 50,
    totalCount: 0,
    totalPrice: 0,
    isPopupCartOpen: false
};

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "CHANGE_POPUP_CART_STATE":
            return { ...state, isPopupCartOpen: action.payload }
        case "ADD_PRODUCT":
            return {
                ...state,
                selected: [
                    ...state.selected,
                    {
                        ...action.payload,
                        uniqueId: Math.trunc(Math.random() * action.payload.id * 10000000),
                        count: 1,
                        isSelected: true,
                    }
                ],
            };
        case "REMOVE_PRODUCT":
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
        case "INCREASE_COUNT":
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
        case "DECREASE_COUNT":
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
        case "RECALCULATE_TOTAL":
            const recalculated = state.selected.reduce((prev, curr) => {
                prev.totalCount += curr.count + curr.additions.reduce((sum, next) => next.isSelected ? sum + 1 : sum, 0);
                const foundSize = curr.sizes.find(item => item.isSelected);
                if (foundSize) {
                    prev.totalPrice += foundSize.price * curr.count + curr.additions.reduce((sum, next) => next.isSelected ? sum + next.price : sum, 0);
                } else {
                    prev.totalPrice += 0
                }
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
        case "CHANGE_CART_ADDITIONS":
            return {
                ...state,
                selected: [
                    ...state.selected.map(item => {
                        return item.uniqueId === action.payload.uniqueId ?
                            {
                                ...item,
                                additions: [
                                    ...item.additions.map(elem => elem.id === action.payload.additionId ? { ...elem, isSelected: !elem.isSelected } : elem)
                                ]
                            } : item
                    })
                ]
            };
        case "REMOVE_ADDITION":
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
        case "CLEAR_CART":
            return {
                ...state,
                selected: [],
                totalCount: 0,
                totalPrice: 0,
            };
        case "CHANGE_PRODUCT_GIFT_CART":
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

const addProductAC = (product: IProduct): {
    type: ADD_PRODUCT
    payload: IProduct
} => ({
    type: "ADD_PRODUCT",
    payload: product
});

const removeProductAC = (id: number): {
    type: REMOVE_PRODUCT
    payload: number
} => ({
    type: "REMOVE_PRODUCT",
    payload: id
});

const increaseCountAC = (id: number): {
    type: INCREASE_COUNT
    payload: number
} => ({
    type: "INCREASE_COUNT",
    payload: id
});
const decreaseCountAC = (id: number): { type: DECREASE_COUNT, payload: number } => ({ type: "DECREASE_COUNT", payload: id });
const changeCartAdditionAC = (uniqueId: number, additionId: number): { type: CHANGE_CART_ADDITIONS, payload: number } => ({ type: "CHANGE_CART_ADDITIONS", payload: { uniqueId, additionId } });
const recalculateTotalAC = (): { type: REMOVE_PRODUCT, payload: number } => ({ type: "RECALCULATE_TOTAL" });
const removeAdditionAC = (uniqueId: number, additionId: number): { type: REMOVE_PRODUCT, payload: number } => ({ type: "REMOVE_ADDITION", payload: { uniqueId, additionId } });

export const changePopupCartState = value => ({ type: "CHANGE_POPUP_CART_STATE", payload: value });
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
export const clearCart = () => ({ type: "CLEAR_CART" });
export const changeAddition = (uniqueId, additionId) => dispatch => {
    dispatch(changeCartAdditionAC(uniqueId, additionId));
    dispatch(recalculateTotalAC());
};
export const removeAddition = (uniqueId, additionId) => dispatch => {
    dispatch(removeAdditionAC(uniqueId, additionId));
    dispatch(recalculateTotalAC());
};
export const changeProductGiftCart = (uniqueId, giftId) => ({ type: "CHANGE_PRODUCT_GIFT_CART", payload: { uniqueId, giftId } });