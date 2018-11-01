import React, { Component } from 'react';
import firebase from 'firebase';
import MessageForm from './MessageForm';
import { connect } from 'react-redux';
import MessageList from './MessageList';

export class Messages extends Component {

    render() {
        const { dispatch, userMessage, messages, thread } = this.props;
        var type;
        if (this.props.match.params.touserid)
            type = 'inbox';
        else type = 'room'
        return (
            <div id="message-box" className="bot">
                <MessageList
                    dispatch={dispatch}
                    thread={thread}
                    messages={messages}
                    type={type}
                />
                <MessageForm
                    userMessage={userMessage}
                    dispatch={dispatch}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thread: state.messageThread,
        userMessage: state.userMessage,
        messages: state.messages
    }
};
export default connect(
    mapStateToProps
)(Messages);
