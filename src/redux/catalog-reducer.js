import { catalogAPI } from './../api/api';

const SET_PIZZA = 'SET_PIZZA';
const CHANGE_FAST_CATEGORY = 'CHANGE_FAST_CATEGORY';

const initialState = {
    fastSortCategory: 'default',
    pizza: {},
    sushi: {},
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
export const changeFastCategory = category => ({type: CHANGE_FAST_CATEGORY, payload: category});

export const requestPizzaCatalog = () => async dispatch => {
    let response = await catalogAPI.getPizzaCatalog();
    dispatch(setPizzaAC(response));
}