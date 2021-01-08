import React, { Component } from "react";
import "./estilo.css";

import deleteSVG from "../../assets/delete.svg";
// ou
// funciona apenas com create react app ou instalar SVGR.
// import {ReactComponent as DeleteSVG } from "../../assets/delete.svg";

class CardDeNotas extends Component {

  apagar() {
    const index = this.props.index;
    this.props.apagarNota(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img src={deleteSVG} alt="" onClick={this.apagar.bind(this)} />
          {/* <DeleteSVG /> */}
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardDeNotas;
