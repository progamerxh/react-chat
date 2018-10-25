import React, { Component } from 'react';
import firebase from 'firebase';
import Message from './Message';
import MessageForm from './MessageForm';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
        this.messageRef = firebase.database().ref('messages');
        this.listenMessages();
    }

    listenMessages() {
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

    render() {
        return (
            <div id="message-box" className="bot">
                <div className="messages">
                    <ul className="list">
                        {this.state.list.map((item, index) =>
                            <Message key={index} message={item} />
                        )}
                    </ul>
                </div>
                <MessageForm />
            </div>
        );
    }
}

export default Messages;