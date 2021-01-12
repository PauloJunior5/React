import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormDeCadastro from "./components/formDeCadastro";
import ListaDeCategorias from "./components/listaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            notas: [],
            categorias: ['Filmes', 'Musica'],
        };
    }

    criarNota(titulo, texto, categoria) {
        const novaNota = { titulo, texto, categoria };
        const novoArrayNotas = [...this.state.notas, novaNota];
        const novoState = {
            notas: novoArrayNotas,
        };
        this.setState(novoState);
    }

    deletarNota(index) {
        let arrayNotas = this.state.notas;
        arrayNotas.splice(index, 1);
        this.setState({ notas: arrayNotas });
    }

    adicionarCategoria(nomeCategoria) {
        const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
        const novoState = { ...this.state, categorias: novoArrayCategorias };
        this.setState(novoState);
    }

    render() {
        return (
            <section className="conteudo">
                {/*chamada de componentes*/}
                <FormDeCadastro categorias={this.state.categorias} criarNota={this.criarNota.bind(this)} />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                        categorias={this.state.categorias}
                        adicionarCategoria={this.adicionarCategoria.bind(this)}
                    />
                    <ListaDeNotas
                        notas={this.state.notas}
                        apagarNota={this.deletarNota.bind(this)}
                    />
                </main>
            </section>
        );
    }
}

export default App;
