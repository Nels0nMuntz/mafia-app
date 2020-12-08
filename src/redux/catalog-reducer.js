import { catalogAPI, filterAPI } from './../api/api';
import actionTypes from './actionTypes';

const { SET_PIZZA, CHANGE_FAST_CATEGORY, TOGGLE_IS_FETCHING, GET_SORT_CATEGORIES, CHANGE_CURRENT_CATEGORY } = actionTypes;

const initialState = {
    currentFastCategory: 'default',
    currentSortCategory: '',
    sortCategories: [],
    pizza: {},
    sushi: {},
    isFetchingCatalog: false,
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA:
            return { ...state, pizza: action.payload, };
        case CHANGE_FAST_CATEGORY:
            return { ...state, currentFastCategory: action.payload, };
        case GET_SORT_CATEGORIES:
            return { ...state, sortCategories: action.payload, };
        case CHANGE_CURRENT_CATEGORY:
            return { ...state, currentSortCategory: action.payload }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetchingCatalog: action.payload, };
        default:
            return state;
    };
};
export default catalogReducer;

const setPizzaAC = data => ({ type: SET_PIZZA, payload: data });
const changeFastCategoryAC = category => ({ type: CHANGE_FAST_CATEGORY, payload: category });
const toggleIsFetchingAC = value => ({ type: TOGGLE_IS_FETCHING, payload: value || false });
const requestSortCategoriesAC = categories => ({type: GET_SORT_CATEGORIES, payload: categories});
const changeCurrentCategoryAC = category => ({type: CHANGE_CURRENT_CATEGORY, payload: category});

export const requestPizzaCatalog = () => async dispatch => {
    dispatch(toggleIsFetchingAC(true));
    let response = await catalogAPI.getPizzaCatalog();
    dispatch(setPizzaAC(response));
    dispatch(toggleIsFetchingAC(false));
};
export const requestSortCategories = () => async dispatch => {
    let response = await filterAPI.getCategories();
    dispatch(requestSortCategoriesAC(response));
    dispatch(changeCurrentCategory(response[0].content));
};
export const changeCurrentCategory = category => dispatch => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeCurrentCategoryAC(category));
    dispatch(toggleIsFetchingAC(false));
};
export const changeFastCategory = category => dispatch => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeFastCategoryAC(category));
    dispatch(toggleIsFetchingAC(false));
};