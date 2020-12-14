import { catalogAPI, filterAPI } from './../api/api';
import actionTypes from './actionTypes';

const { 
    SET_CATALOG_ITEM, 
    SET_SORT_CATEGORIES, 
    SET_FAST_CATEGORIES, 
    CHANGE_SORT_CATEGORY,
    CHANGE_FAST_CATEGORY, 
    TOGGLE_IS_FETCHING
} = actionTypes;

const initialState = {
    sortCategories: [],
    fastCategories: [],
    currentSortCategory: '',
    currentFastCategory: 'default',
    isFetchingCatalog: false,
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOG_ITEM:
            return { ...state, [action.payload.menuItem]: action.payload.data, };
        case SET_SORT_CATEGORIES:
            return { ...state, sortCategories: action.payload, };
        case SET_FAST_CATEGORIES:
            return { ...state, fastCategories: action.payload, };
        case CHANGE_SORT_CATEGORY:
            return { ...state, currentSortCategory: action.payload };
        case CHANGE_FAST_CATEGORY:
            return { ...state, currentFastCategory: action.payload, };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetchingCatalog: action.payload, };
        default:
            return state;
    };
};
export default catalogReducer;

const setCatalogItemaAC = (data, menuItem) => ({ type: SET_CATALOG_ITEM, payload: { data, menuItem } });
const requestSortCategoriesAC = categories => ({ type: SET_SORT_CATEGORIES, payload: categories });
const requestFastCategoriesAC = categories => ({ type: SET_FAST_CATEGORIES, payload: categories });
const changeCurrentSortCategoryAC = category => ({ type: CHANGE_SORT_CATEGORY, payload: category });
const changeCurrentFastCategoryAC = category => ({ type: CHANGE_FAST_CATEGORY, payload: category });
const toggleIsFetchingAC = value => ({ type: TOGGLE_IS_FETCHING, payload: value || false });

export const requestCatalogItem = menuItem => async dispatch => {
    dispatch(toggleIsFetchingAC(true));
    let response = await catalogAPI.getCatalogItem(menuItem);
    dispatch(setCatalogItemaAC(response, menuItem));
    dispatch(toggleIsFetchingAC(false));
};
export const requestSortCategories = () => async dispatch => {
    let response = await filterAPI.getSortCategories();
    dispatch(requestSortCategoriesAC(response));
    dispatch(changeCurrentSortCategoryAC(response[0].content));
};
export const requestFastCategories = (menuItem) => async dispatch => {
    let response = await filterAPI.getFastCategories(menuItem);
    dispatch(requestFastCategoriesAC(response));
    dispatch(changeCurrentFastCategoryAC(response[0].type));
};
export const changeCurrentSortCategory = category => dispatch => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeCurrentSortCategoryAC(category));
    dispatch(toggleIsFetchingAC(false));
};
export const changeCurrentFastCategory = category => dispatch => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeCurrentFastCategoryAC(category));
    dispatch(toggleIsFetchingAC(false));
};