import { menuAPI } from '../api/api';

type REQUEST_MENU_CATEGORIES = "REQUEST_MENU_CATEGORIES";
interface ICategory {
    id: number
    content: string
    imageUrl: string
    link: string
};
export type InitialStateType = {
    categories: Array<ICategory>
};

const initialState: InitialStateType = {
    categories: [],
}

const menuReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "REQUEST_MENU_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    };
};

export default menuReducer

const requestMenuCategoriesAC = (categories: Array<ICategory>): {
    type: REQUEST_MENU_CATEGORIES
    payload: Array<ICategory>
} => ({
    type: "REQUEST_MENU_CATEGORIES", 
    payload: categories
});

export const requestMenuCategories = () => async (dispatch: any) => {
    let response = await menuAPI.getCategories();
    dispatch(requestMenuCategoriesAC(response));
}