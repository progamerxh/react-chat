import React, { Component } from 'react';

class Tags extends Component {

  handleOnClick() {
    this.props.history.push(`/inbox/X1HTOhOh5cbIFTPh7q8bELd42Ro2`);
  }

  render() {
    return (
      <div className="bot tag">
        <ul className="list">

          <li className="item"
            onClick={() => this.handleOnClick()}>
            <div className="texttag">#Tag dump</div>
          </li>
          <li className="item">
            <div className="texttag">#Tag dumpaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          </li>
          <li className="item">
            <div className="texttag">#Tag dump</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tags;