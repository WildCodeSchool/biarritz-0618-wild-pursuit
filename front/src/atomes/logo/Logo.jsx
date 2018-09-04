import React, { Component } from "react";

import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div id="logo">
        <img src={require(".././images/logoWP.png")} width="100" height="70" />
      </div>
    );
  }
}
