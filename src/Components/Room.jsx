import React, { Component } from 'react';

export default class Message extends Component {
    
    render() {
        return (
            <li className="item">
                <div className="avt"></div>
                <div className="content">
                    <h2>  {this.props.message.userName}</h2>
                    <div className="recieve">
                        {this.props.message.message} </div>
                </div>
            </li>
        )
    }
}