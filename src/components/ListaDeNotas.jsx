import React, { Component } from "react";
import CardDeNotas from "./CardDeNotas";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardDeNotas />
        </li>
      </ul>
    );
  }
}

export default ListaDeNotas;
