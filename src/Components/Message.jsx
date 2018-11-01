import React, { Component } from 'react';

export default class Message extends Component {

    render() {
        const { photoURL, displayName, message } = this.props.message;
        return (
            <li className="item">
                <img className="avt" src={photoURL}></img>
                <div className="content">
                    <h2>  {displayName} </h2>

                    <div className="recieve">
                        {message} </div>
                </div>
            </li>
        )
    }
}