import * as types from '../Actions/roomActionTypes'
import { INBOX_JOINED_IN } from '../Actions/inboxActiontype'
import {REFRESH_MESSAGE} from '../Actions/messageActionTypes'
export const roomName = (state = "", action) => {
    switch (action.type) {
        case types.ROOM_JOINED_IN:
            return action.roomName;
        case REFRESH_MESSAGE:
            return '';
        case INBOX_JOINED_IN:
            return '';
        default:
            return state;
    }
};

export const rooms = (state = [], action) => {
    const room = action.room;
    switch (action.type) {
        case types.RETRIEVE_ROOM:
            return [
                ...state,
                {
                    roomName: action.roomName,
                    tags: room.tags,
                    photoURL: room.photoURL
                }
            ];
        case types.ROOM_LEFT:
            return state = [];
        default:
            return state;
    }
};

