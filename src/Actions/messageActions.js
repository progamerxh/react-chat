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
    if (uid !== 0) {
      dispatch(sendMessageInProgress({ uid, displayName, photoURL, message }));
      let thread = getState().inboxThread;
      if (getState().roomName !== '' && getState().roomName !== thread)
        thread = getState().roomName;
      else if (getState().inboxThread !== '' && getState().inboxThread !== thread)
        thread = getState().inboxThread;
      console.log(thread);
      firebase.database().ref(`messages/${thread}`).push({
        uid,
        displayName,
        photoURL,
        message,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      });
    } else {
      dispatch(sendMessageError());
    }
  }
};
