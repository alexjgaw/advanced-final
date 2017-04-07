import { combineReducers } from 'redux';
import {
//  ORGANIZATION_LIST_LOAD,
  ORGANIZATION_LIST_LOAD_SUCCESS,
//  ORGANIZATION_LIST_LOAD_ERROR,
  GET_HERO_HEIGHT
} from '../actions/index';

/**
 *  Organizations array
 */
function organizations(state = [], action) {
  switch (action.type) {
    case ORGANIZATION_LIST_LOAD_SUCCESS:
      return action.organizations;
    default:
      return state;
  }
}

/**
 *  Height of hero element in pixels
 */
function heroHeight(state = null, action) {
  switch (action.type) {
    case GET_HERO_HEIGHT:
      return action.height;
    default:
      return state;
  }
}

export default combineReducers({
  organizations,
  heroHeight
});
