import React from "react";

export default class Thing extends React.Component {

  render() {
    return (
      <div className="good">
        <ul>
          <li><h2>Hey, that's pretty {this.props.good}</h2></li>
          <li><h5>Hey, that's pretty {this.props.good}</h5></li>
          <li><p>Hey, that's pretty {this.props.good}</p></li>
        </ul>
      </div>
    );
  }
}
