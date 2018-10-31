import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from '../Actions/authActions';
import PropTypes from "prop-types";

export class Signin extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillUpdate(nextProps) {
        if (nextProps.isUserSignedIn) {
            this.context.router.history.push("/home");
        }
    }

    render() {
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
