import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import header from './header-reducer';
import filter from './filter-reducer';
import menu from './menu-reducer';
import home from './home-reducer';


const rootReducer = combineReducers({
    header,
    filter,
    menu,
    home,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;