import * as types from '../Actions/usersActionTypes';

export const users = (state = {}, action) => {
  switch (action.type) {
    case types.USER_LOGGED_IN:
    const { uid, userPayload } = action;
      return {
        ...state,
        [uid]: {
          ...userPayload
        }
      };
    default:
      return state;
  }
};
