import React, { Component } from "react";
import './estilo.css';

class FormDeCadastro extends Component {
  constructor() {
    super();
    this.titulo = '';
  }

  handlerMudancaTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className='form-cadastro'>
        <input type="text" placeholder="Titulo" onChange={this.handlerMudancaTitulo.bind(this)}/>
        <textarea placeholder="Escreva sua nota..." rows={15} />
        <button className='form-cadastro_input form-cadastro_submit'>Criar Nota</button>
      </form>
    );
  }
}

export default FormDeCadastro;
