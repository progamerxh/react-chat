import React, { Component } from 'react';
import * as authActions from '../Actions/authActions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

export class InforPanel extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    handleLogOut() {
        this.props.dispatch(authActions.logout());
        this.context.router.history.push("/signin");
    }

    render() {
        const { auth } = this.props;
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
                    <button
                        className="button"
                        onClick={this.handleLogOut()}>
                        Logout
                 </button>
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


const InforPanelContainer = connect(
    mapStateToProps
)(InforPanel);

export default InforPanelContainer;