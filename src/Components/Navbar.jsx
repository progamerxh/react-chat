import React, { Component } from 'react';
import { Link } from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navitems">
                    <li>

                    </li>
                    <li>
                        <Link className="fa fa-home" to='/home'>
                        </Link>

                    </li>
                    <li>
                        <Link className="fa fa-comments-o" to='/inbox/'></Link>
                    </li>

                </ul>
            </div>
        )
    }
}