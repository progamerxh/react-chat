import React, { Component } from 'react';
import firebase from 'firebase'

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Sebastian',
            message: '',
            list: [],
        };
        this.messageRef = firebase.database().ref().child('messages/CNMTPTPM');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.setState({ userName: nextProps.user.displayName });
        }
    }

    handleChange(event) {
        this.setState({ message: event.target.value });

    }

    handleSend() {
        if (this.state.message) {
            var newItem = {
                userName: this.state.userName,
                message: this.state.message,
            }
            this.messageRef.push(newItem);
            this.setState({ message: '' });
        }
    }

    handleKeyPress(event) {
        if (event.key !== 'Enter')
         return;
        this.handleSend();
    }

    render() {
        return (
            <div className="send">
                <input type="textarea"
                    className="type"
                    placeholder="Type message..."
                    aria-label="Type message"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)} />

                <button
                    className="sendbutton"
                    onClick={this.handleSend.bind(this)}
                >
                    send
                </button>
            </div>

        );
    }
}

export default MessageForm;