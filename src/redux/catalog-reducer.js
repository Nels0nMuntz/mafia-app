import { catalogAPI } from './../api/api';
import actionTypes from './actionTypes';

const { SET_PIZZA, CHANGE_FAST_CATEGORY } = actionTypes;

const initialState = {
    fastSortCategory: 'default',
    pizza: {},
    sushi: {},
    isFetching: false,
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA:
            return { ...state, pizza: action.payload, }
        case CHANGE_FAST_CATEGORY:
            return { ...state, fastSortCategory: action.payload, }
        default:
            return state;
    };
};
export default catalogReducer;

const setPizzaAC = data => ({ type: SET_PIZZA, payload: data });
export const changeFastCategory = category => ({ type: CHANGE_FAST_CATEGORY, payload: category });

export const requestPizzaCatalog = () => async dispatch => {
    let response = await catalogAPI.getPizzaCatalog();
    dispatch(setPizzaAC(response));
}