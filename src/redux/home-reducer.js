import { homeAPI } from './../api/api';
import actionTypes from './actionTypes';

const {
    SET_MAIN_SLIDER,
    SET_HOME_SLIDER,
    TOGGLE_IS_FETCHING,
    TOGGLE_HOME_PRODUCT_SIZE,
    CHANGE_HOME_PRODUCT_SIZE,
    CHANGE_HOME_PRODUCT_GIFT,
    CHANGE_HOME_PRODUCT_STATE,
} = actionTypes;

const initialState = {
    mainSlider: [],
    homeSlider: [],
    deliverySlider: [],
    isFetchingHome: false,
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_SLIDER:
            return { ...state, mainSlider: action.payload };
        case SET_HOME_SLIDER:
            return {
                ...state,
                homeSlider: [
                    ...action.payload.map(item => (
                        {
                            ...item,
                            count: 0,
                            productId: Math.trunc(Math.random() * item.id * item.id * 10000000),
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
            };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetchingHome: action.payload };
        case TOGGLE_HOME_PRODUCT_SIZE:
            return {
                ...state,
                homeSlider: [
                    ...state.homeSlider.map(item => {
                        if (item.productId === action.payload) {
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
            };
        case CHANGE_HOME_PRODUCT_SIZE:
            return {
                ...state,
                homeSlider: [
                    ...state.homeSlider.map(item => {
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
            };
        case CHANGE_HOME_PRODUCT_GIFT:
            return {
                ...state,
                homeSlider: [
                    ...state.homeSlider.map(item => {
                        if (item.productId === action.payload.productId) {
                            return {
                                ...item,
                                gifts: [
                                    ...item.gifts.map(gift => gift.id === action.payload.giftId ? { ...gift, isSelected: true } : { ...gift, isSelected: false })
                                ]
                            };
                        } else {
                            return item;
                        }
                    })
                ]
            };
        case CHANGE_HOME_PRODUCT_STATE:
            return {
                ...state,
                homeSlider: [
                    ...state.homeSlider.map(item => {
                        if(item.productId === action.payload.productId){
                            return {
                                ...item,
                                isSelected: action.payload.value
                            }
                        }else{
                            return item
                        }
                    })
                ],
            };
        default:
            return state;
    };
};

export default homeReducer;

const setMainSliderAC = data => ({ type: SET_MAIN_SLIDER, payload: data });
const setHomeSliderAC = data => ({ type: SET_HOME_SLIDER, payload: data });
const toggleIsFetching = value => ({ type: TOGGLE_IS_FETCHING, payload: value || false });

export const requireHomePage = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    let mainSlider = await homeAPI.getMainSliderData();
    let homeSlider = await homeAPI.getHomeSlider();
    dispatch(setMainSliderAC(mainSlider));
    dispatch(setHomeSliderAC(homeSlider));
    dispatch(toggleIsFetching(false));
};
export const toggleHomeProductSize = (productId) => ({ type: TOGGLE_HOME_PRODUCT_SIZE, payload: productId });
export const changeHomeProductSize = (productId, sizeId) => ({ type: CHANGE_HOME_PRODUCT_SIZE, payload: { productId, sizeId } });
export const changeHomeProductGift = (productId, giftId) => ({ type: CHANGE_HOME_PRODUCT_GIFT, payload: { productId, giftId } });
export const changeHomeProductState = (productId, value) => ({ type: CHANGE_HOME_PRODUCT_STATE, payload: { productId, value } });