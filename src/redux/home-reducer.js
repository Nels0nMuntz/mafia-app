import { homeAPI } from './../api/api';
import actionTypes from './actionTypes';

const {
    SET_MAIN_SLIDER,
    TOGGLE_IS_FETCHING,
} = actionTypes;

const initialState = {
    mainSlider: [],
    deliverySlider: [],
    isFetchingHome: false,
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_SLIDER:
            return { ...state, mainSlider: action.payload };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetchingHome: action.payload };
        default:
            return state;
    };
};

export default homeReducer;

const setMainSliderAC = data => ({ type: SET_MAIN_SLIDER, payload: data });
const toggleIsFetching = value => ({ type: TOGGLE_IS_FETCHING, payload: value || false });

export const requestHomePage = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    let mainSlider = await homeAPI.getMainSliderData();
    dispatch(setMainSliderAC(mainSlider));
    dispatch(toggleIsFetching(false));
};