import {createStore, combineReducers, applyMiddleware} from 'redux';
import InitReducer from './reducers/InitReducer'; // Create a reducer for INIT state
import LoadingReducer from './reducers/LoadingReducer';
import thunk from "redux-thunk"; // Create a reducer for LOADING state

const rootReducer = combineReducers({
    INIT: InitReducer,
    LOADING: LoadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
