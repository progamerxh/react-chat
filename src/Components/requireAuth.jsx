import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Signin } from "./SignIn";

export default function (ComposedComponent) {

  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (!this.props.isUserSignedIn) {
        this.context.router.history.push("/signin");
      }
      else
        this.context.router.history.push("/home");
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isUserSignedIn) {
        this.context.router.history.push("/signin");
      }
      else
        this.context.router.history.push("/home");
    }

    render() {
      console.log(this.props.isUserSignedIn);
      if (this.props.isUserSignedIn) {
        return <ComposedComponent {...this.props} />;
      }
      return null;
    }
  }

  function mapStateToProps(state) {
    return { isUserSignedIn: state.auth.isUserSignedIn, };
  }

  return connect(mapStateToProps)(Authentication);
}