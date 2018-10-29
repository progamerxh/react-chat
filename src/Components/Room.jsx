import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);
    }
    handleOnClick() {
        this.props.history.push(`/room/` + this.props.room.name)
    }

    render() {
        return (
            <div className="column" >
                <img alt="" className="groupphoto"></img>
                <h4>{this.props.room.name}</h4>
                <p>Tags: {this.props.room.tags}</p>
                <button className="join"
                    onClick={() => this.handleOnClick()}>
                    <h5>Join</h5>
                </button>
            </div>
        )
    }
}