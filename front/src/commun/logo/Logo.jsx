import React, { Component } from "react";

//import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div id="logo">
        <img
          src={require("./../images/logoWP.png")}
          alt="Logo Wild Pursuit"
          width="100"
          height="70"
        />
      </div>
    );
  }
}
