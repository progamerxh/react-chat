import * as types from '../Actions/usersActionTypes';
import { INBOX_LEFT } from '../Actions/inboxActiontype';

export const users = (state = [], action) => {
    const user = action.user;
    const uid = action.uid;
    switch (action.type) {
        case types.RETRIEVE_USER:
            return [
                ...state,
                {
                    photoURL: user.photoURL,
                    uid,
                    isActive: user.isActive,
                    displayName: user.displayName,
                    lastTimeLoggedIn: user.lastTimeLoggedIn
                }
            ];
        case INBOX_LEFT:
            return state = [];
        default:
            return state;
    }
};

