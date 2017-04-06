/* eslint no-console: 0 */

import axios from 'axios';

export const ORGANIZATION_LIST_LOAD = 'ORGANIZATION_LIST_LOAD';
export const ORGANIZATION_LIST_LOAD_SUCCESS = 'ORGANIZATION_LIST_LOAD_SUCCESS';
export const ORGANIZATION_LIST_LOAD_ERROR = 'ORGANIZATION_LIST_LOAD_ERROR';

export function organizationListLoad() {
  return (dispatch) => {
    dispatch({
      type: ORGANIZATION_LIST_LOAD
    });

    axios.get('/organizations')
      .then(response => {
        dispatch(organizationListLoadSuccess(response.data));
      })
      .catch((error) => {
        dispatch(organizationListLoadError(`Something went wrong! ${error}`));
      });
  };
}

export function organizationListLoadSuccess(organizations) {
  return {
    type: ORGANIZATION_LIST_LOAD_SUCCESS,
    organizations
  };
}

export function organizationListLoadError(message) {
  return {
    type: ORGANIZATION_LIST_LOAD_ERROR,
    message
  };
}
