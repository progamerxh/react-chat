import React, { Component } from 'react';
import firebase from 'firebase';
import Message from './Message';
import MessageForm from './MessageForm';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import Signin from './SignIn';
import * as authActions from '../Actions/authActions';

export class Messages extends Component {

    listenMessages() {
        if (this.props.match.params.touserid && this.props.user) {
            var inboxuid = (this.props.user.uid < this.props.match.params.touserid) ? this.props.user.uid + this.props.match.params.touserid
                : this.props.match.params.touserid + this.props.user.uid;
            console.log(inboxuid);
            this.inboxRef = firebase.database().ref().child('inbox/' + inboxuid);
        } else
            this.messageRef = firebase.database().ref().child('messages/' + this.props.match.params.roomname);
        if (this.props.match.params.touserid && this.props.user) {
            this.inboxRef
                .limitToLast(10)
                .on('value', message => {
                    if (message.val()) {
                        this.setState({
                            list: Object.values(message.val()),
                        });
                    }
                });
        }
        else {
            this.messageRef
                .limitToLast(10)
                .on('value', message => {
                    if (message.val()) {
                        this.setState({
                            list: Object.values(message.val()),
                        });
                    }
                });
        }
    }

    render() {
        console.log("message component");
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
        thread: state.roomName,
        userMessage: state.userMessage,
        messages: state.messages
    }
};
export default connect(
    mapStateToProps
)(Messages);
