import { combineReducers } from 'redux';
import * as authReducers from './authReducer';
import * as messageReducers from './messageReducers';
import * as usersReducers from './userReducers';
import * as roomReducer from './roomReducer';

export default combineReducers({
    auth: authReducers.auth,
    userMessage: messageReducers.userMessage,
    messages: messageReducers.messages,
    users: usersReducers.users,
    rooms: roomReducer.rooms,
    roomName: roomReducer.roomName
  });
  