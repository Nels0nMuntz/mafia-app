import { catalogAPI } from './../api/api';

const SET_PIZZA = 'SET_PIZZA';

const initialState = {
    pizza: [],
    sushi: [],
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA:
            return {...state, pizza: action.payload}
        default:
            return state;
    };
};
export default catalogReducer;

const setPizzaAC = data => ({type: SET_PIZZA, payload: data});

export const requestPizzaCatalog = () => async dispatch => {
    let response = await catalogAPI.getPizzaCatalog();
    dispatch(setPizzaAC(response));
}