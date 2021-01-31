type SET_ERRORS = "SET_ERRORS";
type CHANGE_ERRORS_VISIBILITY = "CHANGE_ERRORS_VISIBILITY";
type CHANGE_READY_TO_RENDER_ERRORS = "CHANGE_READY_TO_RENDER_ERRORS";

export type InitialStateType = {
    errors: string[]
    isVisible: boolean
    readyToRenderErrors: boolean
}

const initialState: InitialStateType = {
    errors: [],
    isVisible: false,
    readyToRenderErrors: false,
};

const checkoutReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_ERRORS":
            const filtered = action.payload.filter((item: any) => item !== "Поле обязательное для заполнения");
            if(filtered.length !== action.payload.length) filtered.push('Заполните все обязательные поля')
            return {
                ...state,
                errors: [
                    ...filtered
                ]
            };
        case "CHANGE_ERRORS_VISIBILITY":
            return {
                ...state,
                isVisible: action.payload
            }
        case "CHANGE_READY_TO_RENDER_ERRORS":
            return {
                ...state,
                readyToRenderErrors: action.payload
            }
        default:
            return state;
    }
};
export default checkoutReducer;

const changeErrorVisibilityAC = (value: boolean): {
    type: CHANGE_ERRORS_VISIBILITY,
    payload: boolean
} => ({ 
    type: "CHANGE_ERRORS_VISIBILITY", 
    payload: value 
});

export const setErrors = (errors: string[]): {
    type: SET_ERRORS
    payload: string[]
} => ({ 
    type: "SET_ERRORS", 
    payload: errors 
});

export const changeErrorVisibility = (value: boolean) => async (dispatch: any) => {
    dispatch(changeErrorVisibilityAC(value));
    setTimeout(() => dispatch(changeErrorVisibilityAC(false)), 5000);
};

export const changeReadyToRenderErrors = (value: boolean): {
    type: CHANGE_READY_TO_RENDER_ERRORS
    payload: boolean
} => ({
    type: "CHANGE_READY_TO_RENDER_ERRORS", 
    payload: value
})