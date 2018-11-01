import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { fetchUser } from '../Actions/authActions'
import Signin from './SignIn';
import { connect } from 'react-redux';
import Home from './Home'
import requireAuth from './requireAuth'
import '../App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
          <Route  path='/' component={Signin} />
          <Route path='/' component={requireAuth(Home)} />
      </div>

    );
  }
}

export default connect(null, { fetchUser })(App);
