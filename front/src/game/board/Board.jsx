import React, { Component } from "react";

import NormalBox from "./boxes/normalBox/NormalBox.jsx";
import CheeseBox from "./boxes/cheeseBox/CheeseBox.jsx";
import ReplayBox from "./boxes/replayBox/ReplayBox.jsx";
import CenterBox from "./boxes/centerBox/CenterBox.jsx";
import Pawn from "./pawn/Pawn.jsx";

export default class Board extends Component {
  render() {
    return (
      <div>
        <Pawn />
        <NormalBox
          objet={{
            id: 27,
            coord: [78, 67],
            categorie: {
              nom: "Géographie",
              couleur: { nom: "Rouge", code: "#FF0000" }
            }
          }}
        />
        <CheeseBox
          cheeseObjet={{
            id: 34,
            coord: [11, 30],
            categorie: {
              nom: "Histoire",
              couleur: { nom: "Noir", code: "#FFFFFF" }
            }
          }}
        />
        <ReplayBox
          replayObjet={{
            id: 22,
            coord: [14, 71],
            categorie: {
              nom: "Loisir",
              couleur: { nom: "Rose", code: "#FFFFFF" }
            }
          }}
        />
        <CenterBox
          centerObjet={{
            id: 82,
            coord: [0, 0],
            categorie: {
              nom: "Loisir",
              couleur: { nom: "Bleu", code: "#FFFFFF" }
            }
          }}
        />
      </div>
    );
  }
}
