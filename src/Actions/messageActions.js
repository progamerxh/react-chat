import * as types from './messageActionTypes';
import firebase from 'firebase';

export const retrieveMessage = ({ uid, displayName, photoURL, message }) => {
  return {
    type: types.RETRIEVE_MESSAGE,
    uid,
    displayName,
    photoURL,
    message
  }
};
export const refreshMessage = () => {
  return {
    type: types.REFRESH_MESSAGE,
  }
};
export const sendMessageInProgress = (payload) => {
  return {
    type: types.SEND_MESSAGE,
    ...payload
  }
};

export const sendMessageSuccess = () => {
  return {
    type: types.SEND_MESSAGE_SUCCESS
  }
};

export const sendMessageError = () => {
  return {
    type: types.SEND_MESSAGE_ERROR
  }
};

export const sendMessage = (message) => {
  return (dispatch, getState) => {
    const { uid, displayName, photoURL } = getState().auth;
    console.log(getState().roomName);
    console.log(getState().inboxThread);
    if (uid !== 0) {
      dispatch(sendMessageInProgress({ uid, displayName, photoURL, message }));
      if (getState().roomName !== '') {
        let thread = getState().roomName;
        firebase.database().ref(`messages/${thread}`).push({
          uid,
          displayName,
          photoURL,
          message,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        });
      }
      else {
        let thread = getState().inboxThread;
        firebase.database().ref(`inbox/${thread}`).push({
          uid,
          displayName,
          photoURL,
          message,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        });
      }
    } else {
      dispatch(sendMessageError());
    }
  }
};
