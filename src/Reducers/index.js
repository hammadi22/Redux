import {combineReducers} from 'redux';
import todosReducer from './todoReducer';

const allReducers = combineReducers({todosReducer});
export default allReducers;