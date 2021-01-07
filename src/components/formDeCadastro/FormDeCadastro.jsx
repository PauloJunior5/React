import React, { Component } from "react";
import "./estilo.css";

class FormDeCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
    this.texto = "";
  }

  _handlerMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handlerMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    console.log(`uma nova nota - ${this.titulo} - foi criada!`);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Titulo"
          onChange={this._handlerMudancaTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          rows={15}
          onChange={this._handlerMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormDeCadastro;
