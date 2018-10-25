import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div id="message-box" className="bot">
                <div className="messages">
                    <ul className="list">
                        <li className="item">
                            <div className="avt"></div>
                            <div className="content">
                                <h2>Name</h2>
                                <div className="recieve">
                                    #Tag dump </div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="avt"></div>
                            <div className="content">
                                <h2>Name</h2>
                                <div className="recieve">
                                    #Tag dump </div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="avt"></div>
                            <div className="content">
                                <h2>Name</h2>
                                <div className="recieve">
                                    #Tag dump </div>
                            </div>
                        </li>
                        <li className="item">
                            <div className="avt"></div>
                            <div className="content">
                                <h2>Name</h2>
                                <div className="recieve">
                                    #Tag dump </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="send">
                    <input type="text" class="type" placeholder="Type message..." aria-label="Type message" value="" />
                </div>
            </div>
        );
    }
}

export default Message;