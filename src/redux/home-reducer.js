import { homeAPI } from './../api/api';
import actionTypes from './actionTypes';

const {SET_MAIN_SLIDER, SET_HOME_SLIDER, TOGGLE_IS_FETCHING} = actionTypes;

const initialState = {
    mainSlider: [],
    homeSlider: [],
    deliverySlider: [],
    isFetching: false,
}

const homeReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_MAIN_SLIDER:
            return {...state, mainSlider: action.payload};
        case SET_HOME_SLIDER:
            return {...state, homeSlider: action.payload};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload};
        default:
            return state;
    };
};

export default homeReducer;

const setMainSliderAC = data => ({type: SET_MAIN_SLIDER, payload: data});
const setHomeSliderAC = data => ({type: SET_HOME_SLIDER, payload: data});
const toggleIsFetching = value => ({type: TOGGLE_IS_FETCHING, payload: value || false})

export const requireHomePage = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    let mainSlider = await homeAPI.getMainSliderData();
    let homeSlider = await homeAPI.getHomeSlider();
    dispatch(setMainSliderAC(mainSlider));
    dispatch(setHomeSliderAC(homeSlider));
    dispatch(toggleIsFetching(false));
};