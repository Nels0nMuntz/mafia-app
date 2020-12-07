import { menuAPI } from './../api/api';
import actionTypes from './actionTypes';

const { REQUEST_MENU_CATEGORIES } = actionTypes;

const initialState = {
    categories: [],
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MENU_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    };
};

export default menuReducer

const requestMenuCategoriesAC = categories => ({type: REQUEST_MENU_CATEGORIES, payload: categories});

export const requestMenuCategories = () => async dispatch => {
    let response = await menuAPI.getCategories();
    dispatch(requestMenuCategoriesAC(response));
}