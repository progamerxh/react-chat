import * as types from '../Actions/roomActionTypes'

export const roomName = (state = "", action) => {
    switch (action.type) {
        case types.ROOM_JOINED_IN:
            console.log(action.roomName);
            return action.roomName;
        case types.ROOM_LEFT:
        default:
            return state;
    }
};

export const rooms = (state = [], action) => {
    switch (action.type) {
        case types.RETRIEVE_ROOM:
            return [
                ...state,
                {
                    roomName: action.roomName,
                    tags: action.tags
                }
            ];
        default:
            return state;
    }
};

