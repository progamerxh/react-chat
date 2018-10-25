import React, { Component } from 'react';
import Room from './Room';
import firebase from 'firebase';

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
        this.roomRef = firebase.database().ref().child('rooms');
        this.listenRooms();
    }

    onRoomJoin = (roomname) => {
        this.props.onRoomJoin(roomname);
    }

    listenRooms() {
        this.roomRef
            .limitToLast(10)
            .on('value', rooms => {
                var list = [];
                rooms.forEach(room => {
                    let name = room.key;
                    let tags = room.val().tags;
                    list.push({ name, tags })
                })
                if (rooms.val()) {
                    this.setState({
                        list: list
                    });
                }
            });
    }
    componentDidMount() {
        this.listenRooms();
    }
    render() {
        return (
            <div className="bot">
                <div class="row">
                    {this.state.list.map((item, index) =>
                        <Room
                            {...this.props}
                            key={index}
                            room={item}
                            onRoomJoin={this.onRoomJoin}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Rooms;