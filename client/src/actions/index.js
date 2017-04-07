/* eslint no-console: 0 */

import axios from 'axios';

export const ORGANIZATION_LIST_LOAD = 'ORGANIZATION_LIST_LOAD';
export const ORGANIZATION_LIST_LOAD_SUCCESS = 'ORGANIZATION_LIST_LOAD_SUCCESS';
export const ORGANIZATION_LIST_LOAD_ERROR = 'ORGANIZATION_LIST_LOAD_ERROR';
export const PUBLICFIGURE_LIST_LOAD = 'PUBLICFIGURE_LIST_LOAD';
export const PUBLICFIGURE_LIST_LOAD_SUCCESS = 'PUBLICFIGURE_LIST_LOAD_SUCCESS';
export const PUBLICFIGURE_LIST_LOAD_ERROR = 'PUBLICFIGURE_LIST_LOAD_ERROR';
export const GET_HERO_HEIGHT = 'GET_HERO_HEIGHT';

export function getHeroHeight(height) {
  return {
    type: GET_HERO_HEIGHT,
    height
  };
}

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

export function publicFigureListLoad() {
  return (dispatch) => {
    dispatch({
      type: PUBLICFIGURE_LIST_LOAD
    });

    axios.get('/publicfigures')
      .then(response => {
        dispatch(publicFigureListLoadSuccess(response.data));
      })
      .catch((error) => {
        dispatch(publicFigureListLoadError(`Something went wrong! ${error}`));
      });
  };
}

export function publicFigureListLoadSuccess(publicFigures) {
  return {
    type: PUBLICFIGURE_LIST_LOAD_SUCCESS,
    publicFigures
  };
}

export function publicFigureListLoadError(message) {
  return {
    type: PUBLICFIGURE_LIST_LOAD_ERROR,
    message
  };
}
