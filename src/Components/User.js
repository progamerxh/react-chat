import React, { Component } from 'react';
import PropTypes from "prop-types";
import { joinInbox } from '../Actions/inboxActions';
import { Link } from 'react-router-dom'
export default class User extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        const {user, dispatch} = this.props;
        if (user.isActive)
            var style = { color: "#86BB71" }
        return (
            <Link to={`/inbox/${user.uid}`}>
            <li className="item" onClick={() => {
                dispatch(joinInbox(user));
                console.log("join in click");
            }}>
    
                <img className="avt" src={user.photoURL}></img>
                <div className="content">
                    <div className="name">{user.displayName}</div>
                    <div className="lastmessage">
                        <i className="fa fa-circle" style={style}></i>
                        {user.isActive ? (
                            "Online"
                        ) : (
                                user.lastTimeLoggedIn
                            )}
                    </div>
                </div>
            </li>
            </Link>
        )
    }
}