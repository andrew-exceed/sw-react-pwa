import { combineReducers } from 'redux';
import userReducer from './userReducer';
import filmsReducer from './filmsReducer'

export default combineReducers({
    userReducer,
    filmsReducer,
});