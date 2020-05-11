import {combineReducers} from 'redux';
import nav from './nav';
import getList from './getList';

export default combineReducers({
  nav,
  getList,
});
