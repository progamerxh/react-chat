import React, { Component } from 'react';
import { retrieveRoom } from '../Actions/roomActions';
import Room from './Room';
import firebase from 'firebase';

export default class RoomList extends Component {

    componentDidMount() {
        this._firebaseRef = firebase.database().ref('rooms');
        this._firebaseRef.on('child_added', snapshot => {
            this.props.dispatch(retrieveRoom(snapshot.key, snapshot.val().tags));
        });
    }

    render() {
        const { rooms, dispatch } = this.props;
        return (
            <div className="bot">
                <div className="row">
                    {rooms.map((item, index) =>
                        <Room
                            dispatch={dispatch}
                            key={index}
                            room={item}
                        />
                    )}
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this._firebaseRef.off();
    }
}
