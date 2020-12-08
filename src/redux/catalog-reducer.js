import { catalogAPI } from './../api/api';
import actionTypes from './actionTypes';

const { SET_PIZZA, CHANGE_FAST_CATEGORY, TOGGLE_IS_FETCHING } = actionTypes;

const initialState = {
    currentFastCategory: 'default',
    pizza: {},
    sushi: {},
    isFetchingCatalog: false,
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA:
            return { ...state, pizza: action.payload, }
        case CHANGE_FAST_CATEGORY:
            return { ...state, currentFastCategory: action.payload, }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetchingCatalog: action.payload, }
        default:
            return state;
    };
};
export default catalogReducer;

const setPizzaAC = data => ({ type: SET_PIZZA, payload: data });
const changeFastCategoryAC = category => ({ type: CHANGE_FAST_CATEGORY, payload: category });
const toggleIsFetching = value => ({type: TOGGLE_IS_FETCHING, payload: value || false});

export const requestPizzaCatalog = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    let response = await catalogAPI.getPizzaCatalog();
    dispatch(setPizzaAC(response));
    dispatch(toggleIsFetching(false));
};

export const changeFastCategory = category => dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(changeFastCategoryAC(category))
    dispatch(toggleIsFetching(false));
};