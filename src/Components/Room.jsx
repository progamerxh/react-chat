import React, { Component } from 'react';
import { joininRoom } from '../Actions/roomActions';
import { Link } from 'react-router-dom'

export default class Message extends Component {
    render() {
        const { room, dispatch } = this.props;
        return (
            <div className="column" >
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
    }
}