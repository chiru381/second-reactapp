import { wishReducer } from './WishReducer/WishReducer';
import { combineReducers } from 'redux';

let rootReducer=combineReducers({wishMessage: wishReducer});

export {rootReducer};