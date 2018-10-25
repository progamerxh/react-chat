import React, { Component } from 'react';
import Messages from './Messages';
import Rooms from './Rooms';
import Tags from './Tags';
import Inboxs from './Inboxs';
import firebase from 'firebase';
import firebaseConfig from '../config';
import SearchForm from './SearchForm'; import { Link, Route, Switch } from 'react-router-dom'
import '../App.css'
firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  handleLogOut() {
    firebase.auth().signOut();
  }

  render() {

    return (
      <div className="App">
        <div className="left">
          <div className="top">
            <SearchForm />
          </div>
          <Switch>
            <Route exact path='/' component={Tags} />
            <Route exact path='/rooms' component={Tags} />
            <Route exact path='/inbox' component={Inboxs} />
          </Switch>
        </div>

        <div className="right">
          <div className="top">
            <div className="tittle">
              Room
            </div>
            {!this.state.user ? (
              <div className="account">
                <button
                  className="button"
                  onClick={this.handleSignIn.bind(this)}
                >
                  Sign in
            </button>
              </div>
            ) : (console.log(this.state.user),
              <div className="account">
                <img className="avt"
                  src={this.state.user.photoURL}
                  alt={this.state.user.displayName}
                />
                <button
                  className="button"
                  onClick={this.handleLogOut.bind(this)}>
                  Logout
                 </button>
              </div>
              )}
          </div>
          <Switch>
            <Route exact path='/' component={Rooms} />
            <Route exact path='/rooms' component={Rooms} />
            <Route exact path='/inbox' component={Messages} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
