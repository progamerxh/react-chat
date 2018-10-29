import React, { Component } from 'react';
import Messages from './Messages';
import Rooms from './Rooms';
import Tags from './Tags';
import UserList from './UserList';
import firebase from 'firebase';
import firebaseConfig from '../config';
import SearchForm from './SearchForm'; import { Link, Route, Switch } from 'react-router-dom'
import '../App.css'

firebase.initializeApp(firebaseConfig);
// Xây dựng giao diện: có thể sử dụng giao diện ở
// https://codepen.io/drehimself/pen/KdXwxR
// Cho phép sử dụng Google để đăng nhập.
// Hiển thị danh sách người có trong hệ thống bao gồm tên, avatar, trạng thái (online,
// last online lúc nào) sắp xếp theo lần chat gần nhất (khung bên trái).
// Khi nhấn vào tên một người hiển thị giao diện cho phép xem lịch sử chat và chat với
// người đó (khung bên phải).
// 5. Cho phép Star một người, để khi người này online tên của người đó sẽ được hiện ở
// đầu danh sách bên khung bên trái.
// 6. Cho phép search người theo tên.
// 7. Cho phép gửi image link và hiện hình đó trong khung chat sau khi gửi tin.
// 8. Cho phép upload hình và hiện hình đó sau khi gửi tin.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      title: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const { user: { uid, displayName, photoURL, email } } = result;

        firebase.database().ref().child(`users/${uid}`).set({
          isActive: true,
          displayName,
          photoURL,
          email,
          lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
        });
      })
      .catch((error) => {
        //Signin failed
      });
  }

  handleLogOut() {
    const { uid } = this.state.user;
    firebase.database().ref().child(`users/${uid}`).update({
      isActive: false,
      lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
    });
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
            <Route exact path='/' render={(props) => <Tags {...props} />} />
            <Route exact path='/rooms' component={Tags} />
            <Route path='/inbox/' component={UserList} />
          </Switch>
        </div>

        <div className="right">
          <div className="top">
            <div className="tittle">
              {this.state.title}
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
            ) : (
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
            <Route exact path='/rooms' render={(props) => <Rooms />} />
            <Route exact path='/room/:roomname' render={(props) => <Messages {...props} user={this.state.user} />} />
            <Route exact path='/inbox/:touserid' render={(props) => <Messages {...props} user={this.state.user} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
