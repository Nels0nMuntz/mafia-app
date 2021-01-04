import actionTypes from './actionTypes'

const { SET_ERRORS, CHANGE_ERRORS_VISIBILITY, CHANGE_READY_TO_RENDER_ERRORS } = actionTypes

const initialState = {
    errors: [],
    isVisible: false,
    readyToRenderErrors: false
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERRORS:
            const filtered = action.payload.filter(item => item !== "Поле обязательное для заполнения");
            if(filtered.length !== action.payload.length) filtered.push('Заполните все обязательные поля')
            return {
                ...state,
                errors: [
                    ...filtered
                ]
            };
        case CHANGE_ERRORS_VISIBILITY:
            return {
                ...state,
                isVisible: action.payload
            }
        case CHANGE_READY_TO_RENDER_ERRORS:
            return {
                ...state,
                readyToRenderErrors: action.payload
            }
        default:
            return state;
    }
};
export default checkoutReducer;

const changeErrorVisibilityAC = value => ({ type: CHANGE_ERRORS_VISIBILITY, payload: value });

export const setErrors = errors => ({ type: SET_ERRORS, payload: errors });
export const changeErrorVisibility = value => async dispatch => {
    dispatch(changeErrorVisibilityAC(value));
    setTimeout(() => dispatch(changeErrorVisibilityAC(false)), 5000);
};
export const changeReadyToRenderErrors = value => ({type: CHANGE_READY_TO_RENDER_ERRORS, payload: value})