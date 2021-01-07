import React, { Component } from "react";
class FormDeCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota..." rows={15} />
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormDeCadastro;
