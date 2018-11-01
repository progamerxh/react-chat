import * as types from '../Actions/inboxActiontype'

export const userInbox = (state = '', action) => {
    switch (action.type) {
        case types.INBOX_JOINED_IN:
            return action.user;
        case types.INBOX_LEFT:
            return '';
        default:
            return state;
    }
};
export const inboxThread = (state = "", action) => {
    switch (action.type) {
        case types.INBOX_JOINED_IN:
            return action.messageThread;
        case types.INBOX_LEFT:
        default:
            return state;
    }
};

