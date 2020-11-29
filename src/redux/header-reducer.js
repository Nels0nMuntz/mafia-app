import { headerAPI } from './../api/api';

const SET_CATEGORIES = 'SET_CATEGORIES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_MENU_STATE = 'TOGGLE_MENU_STATE';

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
    isFetching: false,
    isMenuOpen: false,
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {...state, categories: action.payload}
        case TOGGLE_IS_FETCHING: 
            return {...state, isFetching: action.payload}
        case TOGGLE_MENU_STATE: 
            return {...state, isMenuOpen: action.payload}
        default:
            return state;
    }
};
export default headerReducer;

const setCategories = categories => ({type: SET_CATEGORIES, payload: categories});
const toggleIsFetching = value => ({type: TOGGLE_IS_FETCHING, payload: value});
export const toggleMenuState = (value = false) => ({ type: TOGGLE_MENU_STATE, payload: value })

export const requestCategories = () =>  async dispatch => {
    dispatch(toggleIsFetching(true));
    let response = await headerAPI.getCategories();
    dispatch(setCategories(response));
    dispatch(toggleIsFetching(false));
}