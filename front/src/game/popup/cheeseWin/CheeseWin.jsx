import React, { Component } from "react";
import Button from "./../../../commun/button/Button.jsx";
import { connect } from "react-redux";

class CheeseWin extends Component {
  render() {
    return (
      <div>
        <h1>Féliciations !!</h1>
        <p>
          Vous venez de Gagner une Part de Camembert {this.props.color} pour la
          catégorie {this.props.theme}
        </p>
        <div>
          <Button
            onClick={() => {
              this.props.dispatch({
                type: "@popup/CLOSE"
              });
            }}
            name="Rejouer"
          />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(CheeseWin);
