import React, { Component } from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);

    }
    handleOnClick() {
        this.props.history.push(`/inbox/` + this.props.inbox.uid)
    }

    render() {
        console.log(this.props.inbox)
        return (
            <li className="item" onClick={() => this.handleOnClick()}>

                <img className="avt" src={this.props.inbox.photoURL}></img>
                <div className="content">
                    <div className="name">{this.props.inbox.displayName}</div>
                    <div className="lastmessage">{this.props.inbox.lastTimeLoggedIn}</div>
                </div>
            </li>
        )
    }
}