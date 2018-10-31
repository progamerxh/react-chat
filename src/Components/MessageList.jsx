import React, { Component } from 'react';
import { retrieveMessage } from '../Actions/messageActions';
import Message from './Message';
import firebase from 'firebase';

export default class MessageList extends Component {
    
    componentDidMount() {
        this._firebaseRef = firebase.database().ref(`messages/${this.props.thread}`);
        this._firebaseRef.on('child_added', (snapshot) => {
            const { uid, displayName, photoURL, message } = snapshot.val();
            this.props.dispatch(retrieveMessage({ uid, displayName, photoURL, message }));
        });
    }

    render() {
        const { messages, type } = this.props;
        return (
            <div className="messages">
                <ul className="list">
                    {messages.map((item, index) =>
                        <Message key={index} message={item} type={type} />
                    )}
                </ul>
            </div>
        );
    }

    componentWillUnmount() {
        this._firebaseRef.off();
    }
}
