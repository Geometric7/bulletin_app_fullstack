/* eslint-disable linebreak-style */
/* selectors */
export const getCurrentUser = (state) => state.currentUser;

/* action name creator */
const reducerName = 'currentUser';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_USER_STATUS = createActionName('UPDATE_USER_STATUS');

/* action creators */
export const updateUserStatus = payload => ({ payload, type: UPDATE_USER_STATUS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_USER_STATUS:
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