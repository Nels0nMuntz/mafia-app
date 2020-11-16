import { filterAPI } from './../api/api';

const GET_SORT_CATEGORIES = 'GET_SORT_CATEGORIES';

const initialState = {
    categories: [],
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SORT_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    };
};
export default filterReducer;

const requestSortCategoriesAC = categories => ({type: GET_SORT_CATEGORIES, payload: categories})

export const requestSortCategories = () => async dispatch => {
    let response = await filterAPI.getCategories();
    dispatch(requestSortCategoriesAC(response));
};