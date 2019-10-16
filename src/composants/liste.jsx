import React, { Component } from "react";

class Liste extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>lundi</li>
        <li className="badge badge-success">mardi</li>
        <li>mercredi</li>
      </ul>
    );
  }
}

export default Liste;
