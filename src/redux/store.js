import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import header from './header-reducer';
import menu from './menu-reducer';
import home from './home-reducer';
import catalog from './catalog-reducer';
import cart from './cart-reducer';
import checkout from './checkout-reducer';
import productPage from './productPage-reducer'


const rootReducer = combineReducers({
    header,
    menu,
    home,
    catalog,
    cart,
    checkout,
    productPage
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

window.store = store