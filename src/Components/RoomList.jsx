import React, { Component } from 'react';
import { retrieveRoom } from '../Actions/roomActions';
import { refreshRoom, joininRoom } from '../Actions/roomActions';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import firebase from 'firebase';

export class RoomList extends Component {

    componentWillMount() {
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
                    {rooms.map((room, index) => {
                        return (
                            <div className="column" key={index} >
                                <img src={room.photoURL} alt="" className="roomphoto"></img>
                                <h4>{room.roomName}</h4>
                                <p>Tags: {room.tags}</p>
                                <Link to={`/room/${room.roomName}`}>
                                    <button className="join"
                                        onClick={() => {
                                            dispatch(joininRoom(room.roomName));
                                        }}>
                                        <h5>Join</h5>
                                    </button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    componentWillUnmount() {
        this._firebaseRef.off();
        this.props.dispatch(refreshRoom())
    }
}
const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
};

export default connect(
    mapStateToProps
)(RoomList);
