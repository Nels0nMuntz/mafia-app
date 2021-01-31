import { headerAPI } from '../api/api';

type SET_MENU = "SET_MENU";
type SET_CATEGORIES = "SET_CATEGORIES";
type TOGGLE_MENU_STATE = "TOGGLE_MENU_STATE";

// type CategoryType = {
//     type: string,
//     title: string,
// };
type MenuItemType = {
    id: number,
    item: string,
    submenu: string[]
};
type SetCategoriesActionType = {
    type: SET_CATEGORIES,
    payload: Array<CategoryType>,
};
type SetMenuActionType = {
    type: SET_MENU,
    payload: Array<MenuItemType>,
};
type ToggleMenuStateType = {
    type: TOGGLE_MENU_STATE,
    payload: boolean,
};
export type InitialStateType = {
    categories: Array<CategoryType>,
    menu: Array<MenuItemType>,
    isFetching: boolean,
    isMenuOpen: boolean,
}

const initialState: InitialStateType = {
    categories: [
        {
            id: 1,
            type: "city",
            title: 'Харьков'
        },
        {
            id: 2,
            type: "restaurants",
            title: 'Рестораны'
        },
        {
            id: 3,
            type: "contacts",
            title: 'Контакты'
        },
        {
            id: 4,
            type: "language",
            title: 'RU'
        },
    ],
    menu: [],
    isFetching: false,
    isMenuOpen: false,
};

const headerReducer = (state = initialState, action: any): InitialStateType  => {
    switch (action.type) {
        case "SET_CATEGORIES":
            return {...state, categories: action.payload}
        case "TOGGLE_MENU_STATE": 
            return {...state, isMenuOpen: action.payload}
        case "SET_MENU": 
            return {...state, menu: action.payload}
        default:
            return state;
    }
};
export default headerReducer;

const setCategories = (categories: Array<CategoryType>): SetCategoriesActionType => ({ type: "SET_CATEGORIES", payload: categories });
const setMenuAC = (menu: Array<MenuItemType>): SetMenuActionType => ({ type: "SET_MENU", payload: menu });
export const toggleMenuState = (value = false): ToggleMenuStateType => ({ type: "TOGGLE_MENU_STATE", payload: value });

export const requestCategories = () => async (dispatch: any) => {
    let response = await headerAPI.getCategories();
    dispatch(setCategories(response));
};

export const requestMenu = () => async (dispatch: any) => {
    let response = await headerAPI.getMenu();
    dispatch(setMenuAC(response));
};