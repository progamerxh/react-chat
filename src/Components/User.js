import React, { Component } from 'react';

export default class User extends Component {
    handleOnClick() {
        this.props.history.push(`/inbox/` + this.props.inbox.uid)
    }

    render() {
        var style;
        if (this.props.inbox.isActive)
            style = { color: "#86BB71" }
        return (
            <li className="item" onClick={() => this.handleOnClick()}>

                <img className="avt" src={this.props.inbox.photoURL}></img>
                <div className="content">
                    <div className="name">{this.props.inbox.displayName}</div>
                    <div className="lastmessage">
                        <i className="fa fa-circle" style={style}></i>
                        {this.props.inbox.isActive ? (
                            "Online"
                        ) : (
                                this.props.inbox.lastTimeLoggedIn
                            )}
                    </div>
                </div>
            </li>
        )
    }
}