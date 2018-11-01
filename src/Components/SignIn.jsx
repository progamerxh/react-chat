import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from '../Actions/authActions';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom'
export class Signin extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        if (!this.props.isUserSignedIn) {
            return (
                <div className="App">
                    <div className="signin" onClick={this.props.onSignInClick}>
                        <h2>Welcom to ReactChat</h2>
                        <div id="customBtn" className="customGPlusSignIn">
                            <span className="icon"></span>
                            <span className="buttonText">Sign in with Google</span>
                        </div>
                    </div >
                </div>
            );
        }
        return <Redirect to='/home' />

    }
}
const mapStateToProps = (state) => {
    return {
        isUserSignedIn: state.auth.isUserSignedIn,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onSignInClick: () => {
            dispatch(authActions.signIn())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signin);
