import React, { Component } from "react";
import './estilo.css';

class FormDeCadastro extends Component {
  render() {
    return (
      <form className='form-cadastro'>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota..." rows={15} />
        <button className='form-cadastro_input form-cadastro_submit'>Criar Nota</button>
      </form>
    );
  }
}

export default FormDeCadastro;
