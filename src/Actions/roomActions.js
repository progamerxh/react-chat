import * as types from './roomActionTypes';
import firebase from 'firebase';

export const retrieveRoom = (roomName, tags) => {
  return {
    type: types.RETRIEVE_ROOM,
    roomName,
    tags
  }
};

export const joininRoom = (roomName) => {
  return {
    type: types.ROOM_JOINED_IN,
    roomName
  }
};

export const leaveRoom = () => {
  return {
    type: types.ROOM_LEFT,
  }
};


