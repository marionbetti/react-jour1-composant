import React, { Component } from "react"; //imrc

class Counter extends Component {
  //cc
  state = {
    // c'est ici qu'il faudra stocker toutes les valeurs du composant
    valeur: 10,
    titre: "Mon Compteur !"
  };

  style = {
    fontSize: 15,
    color: "red"
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={this.style}>{this.state.titre}</h1>
        <span className={this.generateClass()}>{this.state.valeur}</span>
        <button style={{ color: "blue", fontWeight: "lighter" }}>
          Ajouter
        </button>
      </React.Fragment>
    );
  }

  generateClass() {
    if (this.state.valeur == 0) {
      return "badge badge-light m-2";
    } else {
      return "badge badge-danger m-2";
    }
  }
}

export default Counter;
