import { filterAPI } from './../api/api';
import actionTypes from './actionTypes'

const { GET_SORT_CATEGORIES, CHANGE_CURRENT_CATEGORY } = actionTypes;

const initialState = {
    currentCategory: '',
    categories: [],
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SORT_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case CHANGE_CURRENT_CATEGORY:
            return {...state, currentCategory: action.payload}
        default:
            return state;
    };
};
export default filterReducer;

const requestSortCategoriesAC = categories => ({type: GET_SORT_CATEGORIES, payload: categories});
export const changeCurrentCategoryAC = category => ({type: CHANGE_CURRENT_CATEGORY, payload: category})

export const requestSortCategories = () => async dispatch => {
    let response = await filterAPI.getCategories();
    dispatch(requestSortCategoriesAC(response));
    dispatch(changeCurrentCategory(response[0].content));
};

export const changeCurrentCategory = category => dispatch => {
    dispatch(changeCurrentCategoryAC(category));
};