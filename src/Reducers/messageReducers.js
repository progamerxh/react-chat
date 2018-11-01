import * as types from '../Actions/messageActionTypes'
import * as inboxtypes from '../Actions/inboxActiontype'
import * as roomtypes from '../Actions/roomActionTypes'

export const userMessageItems = (state, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      const { uid, displayName, message, createdAt } = action;
      return [
        ...state,
        {
          uid,
          displayName,
          message,
          createdAt
        }
      ];
    case types.SEND_MESSAGE_SUCCESS:
    case types.SEND_MESSAGE_ERROR:
    default:
      return state;
  }
};

const userMessageInitialState = {
  isSending: false,
  isTyping: false,
  items: []
};

export const userMessage = (state = userMessageInitialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return {
        ...state,
        isSending: true,
        items: userMessageItems(state.items, action)
      };
    case types.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        isSending: false,
        hasError: false
      };
    case types.SEND_MESSAGE_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export const messages = (state = [], action) => {
  switch (action.type) {
    case types.RETRIEVE_MESSAGE:
      const { uid, displayName, message, photoURL } = action;
      return [
        ...state,
        {
          uid,
          displayName,
          photoURL,
          message
        }
      ];
    case types.REFRESH_MESSAGE:
      return state = [];
    default:
      return state;
  }
};

export const messageThread = (state = "", action) => {
  switch (action.type) {
    case inboxtypes.INBOX_JOINED_IN:
      return action.messageThread;
    case roomtypes.ROOM_JOINED_IN:
      return action.roomName;
 
    default:
      return state;
  }
};

