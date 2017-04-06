import { combineReducers } from 'redux';
import {
//  ORGANIZATION_LIST_LOAD,
  ORGANIZATION_LIST_LOAD_SUCCESS,
//  ORGANIZATION_LIST_LOAD_ERROR
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

export default combineReducers({
  organizations
});
