import React, { Component } from 'react';
import User from './User'
import firebase from 'firebase';
import { retrieveUser } from '../Actions/usersActions';
import { leaveInbox } from '../Actions/inboxActions';

export default class UserList extends Component {
  componentDidMount() {
    this._firebaseRef = firebase.database().ref('users');
    this._firebaseRef.on('child_added', snapshot => {
      this.props.dispatch(retrieveUser(snapshot.key,snapshot.val()));
    });
  }


  render() {
    const { users, dispatch } = this.props;
    return (
      <div className="bot inbox">
        <ul className="list">
          {
            users.map((item, index) =>
              <User
                key={index}
                dispatch={dispatch}
                user={item} />
            )
          }
        </ul>
      </div>
    );
  }

  componentWillUnmount() {
    this._firebaseRef.off();
    this.props.dispatch(leaveInbox());
  }

}
