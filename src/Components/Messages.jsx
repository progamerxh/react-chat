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
        this.messageRef = firebase.database().ref().child('messages/' + this.props.match.params.roomname);
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

    componentDidMount(){
        this.listenMessages();
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
                <MessageForm user={this.props.user}/>
            </div>
        );
    }
}

export default Messages;