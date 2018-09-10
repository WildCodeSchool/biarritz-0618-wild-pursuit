import React, { Component } from "react";
import Button from "./../../../commun/button/Button.jsx";
import { connect } from "react-redux";

import Stats from "./../stats/Stats.jsx";

class NameWinner extends Component {
  render() {
    return (
      <div>
        <h1>La partie est terminée</h1>
        <p>Le vainqueur de la partie est "NOM DU GAGNANT"</p>
        <div>
          <Button
            onClick={() => {
              //alert("#todo : affichage des statistiques");
              this.props.dispatch({
                type: "@popup/OPEN",
                payload: { content: <Stats /> }
              });
            }}
            name="Afficher les statistiques"
          />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(NameWinner);
