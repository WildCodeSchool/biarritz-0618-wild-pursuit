import React, { Component } from "react";

import Slider from "@material-ui/lab/Slider";

import NormalBox from "./boxes/normalBox/NormalBox.jsx";
import CheeseBox from "./boxes/cheeseBox/CheeseBox.jsx";
import ReplayBox from "./boxes/replayBox/ReplayBox.jsx";
import CenterBox from "./boxes/centerBox/CenterBox.jsx";
import Pawn from "./pawn/Pawn.jsx";
import "./board.css";
// récupérer le nombre de catégories du back // WEBSOCKETS
const U = 12; // Constate d'unité (en pixel)
const WIDTH = 800; // constante de la longueur de zone de jeu en pixels
const HEIGHT = 800; // constante de la hauteur de zone de jeu en pixels

function createBox(component, id, coord, size) {
  return { component, id, coord, size };
}

function createInteriorBox(component, id, coord, size, transform) {
  return { component, id, coord, size, transform };
}

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [],
      value: 6
    };
    this.generateBoard = this.generateBoard.bind(this);
  }

  componentDidMount() {
    this.setState({ boxes: this.generateBoard(6) });
  }

  generateBoard(N) {
    //const N = this.state.value;
    let lastJ = 0;
    let boxes = [];
    const ANGLE = 360 / N;
    const CENTERBOX_SIZE = U * N; // C'est un carré
    const CENTERBOX_LEFT = WIDTH / 2;
    const CENTERBOX_TOP = WIDTH / 2;
    boxes.push(
      createBox(CenterBox, 0, [CENTERBOX_LEFT, CENTERBOX_TOP], CENTERBOX_SIZE)
    );
    let m = 0;
    let rot = 0;
    for (let i = 0; i < N; i++) {
      let n = i * N + 1;
      let nSize = (Math.PI * CENTERBOX_SIZE) / N;
      let nCoord = [CENTERBOX_LEFT - nSize / 2, CENTERBOX_TOP - nSize / 2];
      let nTransform = `rotate(${rot}deg) translate(${(N / 4) * nSize + 4}px) `;
      boxes.push(createInteriorBox(NormalBox, n, nCoord, nSize, nTransform));

      m = n + 1;
      let j = 1;
      while (m % N !== 0) {
        j += 1;
        let mSize = (Math.PI * CENTERBOX_SIZE) / N;
        let mCoord = [CENTERBOX_LEFT - mSize / 2, CENTERBOX_TOP - mSize / 2];
        let mTransform = `rotate(${rot}deg) translate(${(N / 4) *
          mSize *
          j}px) `;
        boxes.push(createInteriorBox(NormalBox, m, mCoord, mSize, mTransform));
        m++;
      }

      // boxes.push(createBox(CheeseBox, m, [WIDTH / 2, HEIGHT / 2])); // TODO
      let mSize = (Math.PI * CENTERBOX_SIZE) / N;
      let mCoord = [CENTERBOX_LEFT - mSize / 2, CENTERBOX_TOP - mSize / 2];
      let mTransform = `rotate(${rot}deg) translate(${(N / 4) *
        mSize *
        (j + 1)}px) `;
      boxes.push(createInteriorBox(CheeseBox, m, mCoord, mSize, mTransform)); // TODO cheeseBox
      rot += ANGLE;
      lastJ = j;
    }
    rot = 0;
    let a = 360 / (N * N + N);
    for (let i = 1; i < N + 1; i++) {
      let n = i * N;
      for (var j = 1; j < N + 1; j++) {
        m++;
        let mSize = (Math.PI * CENTERBOX_SIZE) / N;
        let mCoord = [CENTERBOX_LEFT - mSize / 2, CENTERBOX_TOP - mSize / 2];
        let mTransform = `rotate(${rot}deg) translate(${(N / 4) *
          mSize *
          (lastJ + 1)}px,${mSize + 8}px) `;
        boxes.push(createInteriorBox(NormalBox, m, mCoord, mSize, mTransform));
        rot += a;
      }
      rot += a;
    }
    return boxes;
  }

  handleSlider = (event, value) => {
    this.setState({ value });
    this.setState({ boxes: this.generateBoard(value) });
  };

  render() {
    return (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          position: "relative",
          border: "1px solid black",
          overflow: "auto"
        }}
      >
        <div style={{ width: "300px" }}>
          <Slider
            value={this.state.value}
            min={4}
            max={10}
            step={1}
            onChange={this.handleSlider}
          />
        </div>
        {this.state.boxes.map(box => {
          let { component: B, ...rest } = box;
          return <B {...rest} />;
        })}
      </div>
    );
  }
}
