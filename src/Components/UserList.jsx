import React, { Component } from 'react';
import User from './User'
import firebase from 'firebase';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  listenRooms() {
    this.userRef = firebase.database().ref().child('users');
    this.userRef
      .limitToLast(10)
      .on('value', users => {
        var list = [];
        users.forEach(user => {
          let uid = user.key;
          let val = user.val();
          val.uid = uid;
          list.push(val);

        })
        if (users.val()) {
          this.setState({
            list
          });
        }
      });
  }

  componentDidMount() {
    this.listenRooms();
  }

  render() {
    return (
      <div className="bot inbox">
        <ul className="list">
          {
            this.state.list.map((item, index) =>
              <User {...this.props} key={index} inbox={item} />
            )
          }
        </ul>
      </div>
    );
  }
}

export default UserList;