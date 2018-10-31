import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomList from './RoomList';

class Rooms extends Component {

    render() {
        const { dispatch, rooms, isUserSignedIn } = this.props;
        return (
            <RoomList
                dispatch={dispatch}
                isUserSignedIn={isUserSignedIn}
                rooms={rooms}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isUserSignedIn: state.auth.isUserSignedIn,
        rooms: state.rooms
    }
};

export default connect(
    mapStateToProps
)(Rooms);
