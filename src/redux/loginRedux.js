/* eslint-disable linebreak-style */

/* selectors */
export const getLoginState = (state) => state.isLogged;

/* action name creator */
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_LOGIN_STATUS = createActionName('UPDATE_LOGIN_STATUS');

/* action creators */
export const updateLoginStatus = payload => ({ payload, type: UPDATE_LOGIN_STATUS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_STATUS:
      switch (action.payload) {
        case 'login': return true;
        case 'logout': return false;
        default:
          return statePart;
      }
    default:
      return statePart;
  }
}