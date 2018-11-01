import React, { Component } from 'react';
import * as authActions from '../Actions/authActions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export class InforPanel extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        const { auth, onLogOutClick, userInbox, roomName } = this.props;
        return (
            <div className="top">
                {(roomName !== '') ? (
                    <div className="tittle">
                        <div className="name">{roomName}</div>
                    </div>

                ) : (null)}
                {(userInbox !== '') ? (
                    <div className="tittle">
                        <img className="avt" src={userInbox.photoURL}></img>
                        <div className="name">{userInbox.displayName}</div>
                        <div className="fav fa fa-star-o">
                        </div>
                        <div className="lastmessage">
                        </div>
                    </div>
                ) : (null)
                }

                <div className="account">
                    <img className="avt"
                        src={auth.photoURL}
                        alt={auth.displayName}
                    />
                    <Link to='/'>
                        <button
                            className="button"
                            onClick={onLogOutClick}>
                            Logout
                        </button>
                    </Link>

                </div>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        roomName: state.roomName,
        userInbox: state.userInbox
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogOutClick: () => {
            dispatch(authActions.logout())
        }
    }
};

const InforPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InforPanel);

export default InforPanelContainer;