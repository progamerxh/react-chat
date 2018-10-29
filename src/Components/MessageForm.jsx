import React, { Component } from 'react';
import firebase from 'firebase'

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            message: '',
            list: [],
        };
    
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.setState({ user: nextProps.user });
        }
    }

    handleChange = e => {
        this.setState({ message: e.target.value });
    }

    handleSend() {
        if (this.props.match.params.touserid && this.props.user) {
            var inboxuid = (this.props.user.uid < this.props.match.params.touserid) ? this.props.user.uid + this.props.match.params.touserid
                : this.props.match.params.touserid + this.props.user.uid;
            this.inboxRef = firebase.database().ref().child('inbox/' + inboxuid);
        } else
            this.messageRef = firebase.database().ref().child('messages/' + this.props.match.params.roomname);
        if (this.state.message ) {
            if (this.inboxRef) {
                var newItem = {
                    sendid: this.state.user.uid,
                    sendname: this.state.user.displayName,
                    message: this.state.message,
                    recieveid: this.props.touserid,
                    recievename: this.props.touserid
                }
                this.inboxRef.push(newItem);
            }
            else {
                var newItem = {
                    userName: this.state.user.displayName,
                    message: this.state.message,
                }
                this.messageRef.push(newItem);

            }
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
                    onChange={this.handleChange}
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