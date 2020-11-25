import { menuAPI } from './../api/api';


const REQUEST_MENU_CATEGORIES = 'REQUEST_MENU_CATEGORIES';

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
    console.log(response);
    dispatch(requestMenuCategoriesAC(response));
}