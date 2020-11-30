import { createStore, combineReducers } from 'redux';
import generalReducer from './reducers/generalReducer';

const rootReducer = combineReducers({
    general: generalReducer
});

export default () => {
    return createStore(rootReducer);
}