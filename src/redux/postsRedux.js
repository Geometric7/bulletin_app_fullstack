/* eslint-disable linebreak-style */
import Axios from 'axios';
import { api } from '../settings.js';

/* selectors */
export const getAllPosts = ({posts}) => posts.data;
export const getCurrentPost = ({ posts }) => posts.currentPost;
export const getLoadingState = ({ posts }) => posts.loading;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_POST_STATUS = createActionName('UPDATE_POST_STATUS');
const ADD_POST = createActionName('ADD_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updatePostStatus = payload => ({ payload, type: UPDATE_POST_STATUS });
export const addPost = payload => ({ payload, type: ADD_POST});

/* thunk creators */

export const fetchPublished = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const state = getState();
    if (state.posts.data.length === 0 && state.posts.loading.active) {
      Axios
        .get(`${api.url}/${api.posts}`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.posts}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const postToAPI = ({ id, order, status }, newStatus) => {
  return (dispatch, getState) => {
    Axios
      .put(`${api.url}/${api.posts}/${id}`, { id: id, order: order, status: newStatus })
      .then(res => {
        dispatch(addPost(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_POST_STATUS: {

      return {
        ...statePart,
        data: [
          ...statePart.data.map(post => post.id === action.payload.id ? action.payload : post),
        ],
      };
    }
    case ADD_POST: {
      return {
        ...statePart,
        data: [
          ...statePart.data,
          action.payload,
        ],
      };
    }
    default:
      return statePart;
  }
};
