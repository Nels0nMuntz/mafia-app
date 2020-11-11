import { headerAPI } from './../api/api';

const SET_CATEGORIES = 'SET_CATEGORIES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    categories: [
        {
            title: 'Харьков'
        },
        {
            title: 'Рестораны'
        },
        {
            title: 'Контакты'
        },
    ],
    isFetching: false
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {...state, categories: action.payload}
        case TOGGLE_IS_FETCHING: 
            return {...state, isFetching: action.payload}
        default:
            return state;
    }
};
export default headerReducer;

const setCategories = categories => ({type: SET_CATEGORIES, payload: categories});
const toggleIsFetching = value => ({type: TOGGLE_IS_FETCHING, payload: value});

export const requestCategories = () => async dispatch => {
    dispatch(toggleIsFetching(true));
    const response = await headerAPI.getCategories();
    dispatch(setCategories(response));
    dispatch(toggleIsFetching(false));
}