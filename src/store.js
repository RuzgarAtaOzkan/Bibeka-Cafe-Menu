import { createStore, combineReducers } from 'redux';
import generalReducer from './reducers/generalReducer';

const rootReducer = combineReducers({
    general: generalReducer
});

export default function initStore() {
    return createStore(rootReducer);
}

