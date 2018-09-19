import React, { Component } from "react";

export default class CenterBox extends Component {
  render() {
    const { coord, id, size } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          top: coord[1] - size / 2,
          left: coord[0] - size / 2, //backgroundColor: "black",
          //backgroundImage: "url(./../../../commun/images/logoLoup.png)",
          backgroundPosition: "center",
          border: "1px solid black",
          borderRadius: size,
          width: size,
          height: size
        }}
      >
        {id}
      </div>
    );
  }
}
