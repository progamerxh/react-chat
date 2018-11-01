import React, { Component } from 'react';
import { retrieveRoom, leaveRoom } from '../Actions/roomActions';
import Room from './Room';
import firebase from 'firebase';

export default class RoomList extends Component {

    componentDidMount() {
        this._firebaseRef = firebase.database().ref('rooms');
        this._firebaseRef.on('child_added', snapshot => {
            this.props.dispatch(retrieveRoom(snapshot.key, snapshot.val()));
        });
    }

    render() {
        const { rooms, dispatch } = this.props;
        return (
            <div className="bot">
                <div className="row">
                    {rooms.map((item, index) =>
                        <Room
                            key={index}
                            dispatch={dispatch}
                            room={item}
                        />
                    )}
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this._firebaseRef.off();
        this.props.dispatch(leaveRoom())
    }
}
