import * as types from './usersActionTypes';
import firebase from 'firebase';



export const addConnectedUser = ({ uid, userPayload }) => {
  return {
    type: types.USER_LOGGED_IN,
    uid,
    userPayload
  }
};
