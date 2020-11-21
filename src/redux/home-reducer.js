import { homeAPI } from './../api/api';

const SET_MAIN_SLIDER = 'SET_SLIDER';

const initialState = {
    mainSlider: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_MAIN_SLIDER:
            return {...state, mainSlider: action.payload};
        default:
            return state;
    };
};

export default homeReducer;

const setMainSliderAC = data => ({type: SET_MAIN_SLIDER, payload: data});

export const setMainSlider = () => async dispatch => {
    let response = await homeAPI.getMainSliderData();
    dispatch(setMainSliderAC(response));
}