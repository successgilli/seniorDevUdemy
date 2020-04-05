import { combineReducers } from 'redux';
import searchReducer from './modules/serchox';
import robots from './modules/robots';

export default combineReducers({
    searchReducer,
    robots
});
