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
        if (this.props.match.params.touserid && this.props.user) {
            var inboxuid = (this.props.user.uid < this.props.match.params.touserid) ? this.props.user.uid + this.props.match.params.touserid
                : this.props.match.params.touserid + this.props.user.uid;
            this.inboxRef = firebase.database().ref().child('inbox/' + inboxuid);
        } else
            this.messageRef = firebase.database().ref().child('messages/' + this.props.match.params.roomname);
        this.listenMessages();
    }

    listenMessages() {
        if (this.props.match.params.touserid ) {
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

    componentWillMount() {
        this.listenMessages();
    }

    render() {
        var type;
        if (this.props.match.params.touserid)
            type = 'inbox';
        else type = 'room'
        return (
            <div id="message-box" className="bot">
                <div className="messages">
                    <ul className="list">
                        {this.state.list.map((item, index) =>
                            <Message key={index} message={item} type={type} />
                        )}
                    </ul>
                </div>
                <MessageForm
                    {...this.props}
                    touserid={this.props.match.params.touserid}
                    user={this.props.user} />
            </div>
        );
    }
}

export default Messages;