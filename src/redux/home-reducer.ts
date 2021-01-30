import { homeAPI } from '../api/api';

type SET_MAIN_SLIDER = "SET_MAIN_SLIDER";
type TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
type MainSliderItemType = {
    id: number,
    imageUrlDesctop: string,
    imageUrlMobile: string,
};
type SetMainSliderActionType = {
    type: SET_MAIN_SLIDER,
    payload: Array<MainSliderItemType>
};
type ToggleIsFetchingActionType = {
    type: TOGGLE_IS_FETCHING,
    payload: boolean
};
type InitialStateType = {
    mainSlider: Array<MainSliderItemType>,
    deliverySlider: object[],
    isFetchingHome: boolean,
};

export const initialState: InitialStateType = {
    mainSlider: [],
    deliverySlider: [],
    isFetchingHome: false,
}

const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_MAIN_SLIDER":
            return { ...state, mainSlider: action.payload };
        case "TOGGLE_IS_FETCHING":
            return { ...state, isFetchingHome: action.payload };
        default:
            return state;
    };
};

export default homeReducer;

const setMainSliderAC = (data: Array<MainSliderItemType>): SetMainSliderActionType => ({ type: "SET_MAIN_SLIDER", payload: data });
const toggleIsFetching = (value = false): ToggleIsFetchingActionType => ({ type: "TOGGLE_IS_FETCHING", payload: value });

export const requestHomePage = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    let mainSlider = await homeAPI.getMainSliderData();
    dispatch(setMainSliderAC(mainSlider));
    dispatch(toggleIsFetching(false));
};