import React, { Component } from 'react';
import logo from './logo.svg';
import Message from './Message';
import Rooms from './Rooms';
import Tags from './Tags';
import Inboxs from './Inboxs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <div className="top">
            <form>
              <svg id="searchicon" class="icon">
                <path fill="#000000" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">
                </path>
              </svg>
              <input type="text" class="search" placeholder="Tags" aria-label="Search" value="" />
            </form>
          </div>
          <Inboxs/>
        </div>

        <div className="right">
          <div className="top">
            <p>#Tag</p>
          </div>
          <Message />
        </div>
      </div>
    );
  }
}

export default App;
