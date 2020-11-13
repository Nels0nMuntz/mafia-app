import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import headerReducer from './header-reducer';


const rootReducer = combineReducers({
    headerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;