import React, { Component } from "react"; //imrc

class Counter extends Component {
  //cc
  state = {
    // c'est ici qu'il faudra stocker toutes les valeurs du composant
    valeur: 0,
    titre: "Mon Compteur !"
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.titre}</h1>
        <span className="badge badge-light m-2">{this.state.valeur}</span>
        <button>Ajouter</button>
      </React.Fragment>
    );
  }
}

export default Counter;
