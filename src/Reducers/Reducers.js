import { combineReducers } from 'redux';
import * as authReducers from './authReducer';
import * as messageReducers from './messageReducers';
import * as userReducers from './userReducers';
import * as roomReducer from './roomReducer';
import * as inboxReducer from './inboxReducer';

export default combineReducers({
    auth: authReducers.auth,
    userMessage: messageReducers.userMessage,
    inboxThread: inboxReducer.inboxThread,
    messages: messageReducers.messages,
    users: userReducers.users,
    userInbox: inboxReducer.userInbox, 
    rooms: roomReducer.rooms,
    roomName: roomReducer.roomName
  });
  