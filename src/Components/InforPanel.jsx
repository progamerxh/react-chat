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
        const { auth, onLogOutClick } = this.props;
        return (
            <div className="top">
                {auth.isUserSignedIn ? (
                    <div className="tittle">
                        <img className="avt" src={auth.photoURL}></img>
                        <div className="name">{auth.displayName}</div>
                        <div className="fav fa fa-star-o">
                        </div>
                        <div className="lastmessage">
                        </div>
                    </div>
                ) : (<p></p>)
                }
                <div className="account">
                    <img className="avt"
                        src={auth.photoURL}
                        alt={auth.displayName}
                    />
                    <Link to='/signin'>
                        <button
                            className="button"
                            onClick={onLogOutClick}>
                            Logout
                        </button>
                    </Link>

                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth
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