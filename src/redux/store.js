import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';
import roles from './reducers/projectroles';

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
    roles
});

const store = createStore(reducer);

export default store;
