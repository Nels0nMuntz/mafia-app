const actionTypes =  {

    // fetching
    TOGGLE_IS_FETCHING: "TOGGLE_IS_FETCHING",

    // filter
    SET_SORT_CATEGORIES: "SET_SORT_CATEGORIES",
    SET_FAST_CATEGORIES: "SET_FAST_CATEGORIES",
    CHANGE_SORT_CATEGORY: "CHANGE_SORT_CATEGORY",
    CHANGE_FAST_CATEGORY: "CHANGE_FAST_CATEGORY",

    //header
    SET_CATEGORIES: 'SET_CATEGORIES',
    TOGGLE_MENU_STATE:'TOGGLE_MENU_STATE',
    SET_MENU: 'SET_MENU',

    // home
    SET_MAIN_SLIDER: "SET_MAIN_SLIDER",
    SET_HOME_SLIDER: "SET_HOME_SLIDER",
    TOGGLE_HOME_PRODUCT_SIZE: "TOGGLE_HOME_PRODUCT_SIZE",
    CHANGE_HOME_PRODUCT_SIZE: "CHANGE_HOME_PRODUCT_SIZE",
    CHANGE_HOME_PRODUCT_GIFT: "CHANGE_HOME_PRODUCT_GIFT",
    CHANGE_HOME_PRODUCT_STATE: "CHANGE_HOME_PRODUCT_STATE",

    // menu
    REQUEST_MENU_CATEGORIES: "REQUEST_MENU_CATEGORIES",

    // catalog
    SET_CATALOG_ITEM: "SET_CATALOG_ITEM",
    TOGGLE_PRODUCT_SIZE: "TOGGLE_PRODUCT_SIZE",
    CHANGE_PRODUCT_SIZE: "CHANGE_PRODUCT_SIZE",
    CHANGE_PRODUCT_GIFT: "CHANGE_PRODUCT_GIFT",
    CHANGE_PRODUCT_STATE: "CHANGE_PRODUCT_STATE",
    CHANGE_ACTIVE_PRODUCT: "CHANGE_ACTIVE_PRODUCT",
    SET_CATALOG: "SET_CATALOG",

    // cart
    CHANGE_POPUP_CART_STATE: 'CHANGE_POPUP_CART_STATE',
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    INCREASE_COUNT: 'INCREASE_COUNT',
    DECREASE_COUNT: 'DECREASE_COUNT',
    RECALCULATE_TOTAL: 'RECALCULATE_TOTAL',
    CHANGE_CART_ADDITIONS: 'CHANGE_CART_ADDITIONS',
    REMOVE_ADDITION: 'REMOVE_ADDITION',
    TOGGLE_PRODUCT_SIZE_CART: 'TOGGLE_PRODUCT_SIZE_CART',
    CHANGE_PRODUCT_SIZE_CART: 'CHANGE_PRODUCT_SIZE_CART',
    CHANGE_PRODUCT_GIFT_CART: 'CHANGE_PRODUCT_GIFT_CART',

    // checkout
    SET_ERRORS: 'SET_ERRORS',
    CHANGE_ERRORS_VISIBILITY: 'CHANGE_ERRORS_VISIBILITY',
    CHANGE_READY_TO_RENDER_ERRORS: 'CHANGE_READY_TO_RENDER_ERRORS',
    CLEAR_CART: 'CLEAR_CART',

    // product page
    SET_PRODUCT_PAGE: 'SET_PRODUCT_PAGE',
    SET_PRODUCT_SIZE: 'SET_PRODUCT_SIZE',
    SET_PRODUCT_GIFT: 'SET_PRODUCT_GIFT',
    CHANGE_PRODUCT_ADDITION: 'CHANGE_PRODUCT_ADDITION',
}

export default actionTypes