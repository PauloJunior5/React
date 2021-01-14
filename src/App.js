import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormDeCadastro from "./components/formDeCadastro";
import ListaDeCategorias from "./components/listaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Nota";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
    constructor() {
        super();
        this.categorias = new Categorias();
        this.notas = new ArrayNotas();
    }

    render() {
        return (
            <section className="conteudo">
                {/*chamada de componentes*/}
                <FormDeCadastro
                    categorias={this.categorias}
                    criarNota={this.notas.adicionarNota.bind(this.notas)}
                />
                <main className="conteudo-principal">
                    {console.log(this.categorias)}
                    <ListaDeCategorias
                        categorias={this.categorias}
                        adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
                    />
                    <ListaDeNotas
                        notas={this.notas}
                        apagarNota={this.notas.apagarNota.bind(this.notas)}
                    />
                </main>
            </section>
        );
    }
}

export default App;
