import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormDeCadastro from "./components/formDeCadastro";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoState = {
      notas: novoArrayNotas,
    };
    this.setState(novoState);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState(arrayNotas);
  }

  render() {
    return (
      <section className="conteudo">
        {/*chamada de componentes*/}
        <FormDeCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)} />
      </section>
    );
  }
}

export default App;
