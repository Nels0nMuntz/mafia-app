import { headerAPI } from './../api/api';
import actionTypes from './actionTypes'

const { SET_CATEGORIES, TOGGLE_MENU_STATE, SET_MENU } = actionTypes;

const initialState = {
    categories: [
        {
            type: "city",
            title: 'Харьков'
        },
        {
            type: "restaurants",
            title: 'Рестораны'
        },
        {
            type: "contacts",
            title: 'Контакты'
        },
        {
            type: "language",
            title: 'RU'
        },
    ],
    menu: [],
    isFetching: false,
    isMenuOpen: false,
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {...state, categories: action.payload}
        case TOGGLE_MENU_STATE: 
            return {...state, isMenuOpen: action.payload}
        case SET_MENU: 
            return {...state, menu: action.payload}
        default:
            return state;
    }
};
export default headerReducer;

const setCategories = categories => ({type: SET_CATEGORIES, payload: categories});
const setMenuAC = menu => ({type: SET_MENU, payload: menu});
export const toggleMenuState = (value = false) => ({ type: TOGGLE_MENU_STATE, payload: value });

export const requestCategories = () =>  async dispatch => {
    let response = await headerAPI.getCategories();
    dispatch(setCategories(response));
};

export const requestMenu = () => async dispatch => {
    let response = await headerAPI.getMenu();
    dispatch(setMenuAC(response));
};