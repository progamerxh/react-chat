import * as types from './inboxActiontype';

export const joinInboxSuccess = (messageThread, user) => {
    return {
        type: types.INBOX_JOINED_IN,
        messageThread,
        user
    }
};

export const leaveInbox = () => {
    return {
        type: types.INBOX_LEFT,
    }
};
export const joinInbox = (user) => {
    return (dispatch, getState) => {
        const { uid } = getState().auth;
        let thread = (uid < user.touid) ? uid + user.touid : user.touid + uid;
        if (uid !== 0) {
            dispatch(joinInboxSuccess(thread, user));
        }
        else
            dispatch(leaveInbox());
    }
}

