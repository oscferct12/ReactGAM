import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';
import roles from './reducers/projectroles';
import servers from './reducers/serverinstances';

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
    roles,
    servers

});

const store = createStore(reducer);

export default store;
