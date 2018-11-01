import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import UserList from './UserList';

export class Users extends Component {

    render() {
        const { dispatch, users } = this.props;
        return (
            <UserList
                dispatch={dispatch}
                users={users}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};
export default connect(
    mapStateToProps
)(Users);
