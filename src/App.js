import React, { Component } from 'react';
import ListaDeNotas from './components/listaDeNotas';
import FormDeCadastro from './components/formDeCadastro';
import './assets/App.css';
import './assets/index.css';

class App extends Component {

    criarNota(titulo, texto) {
        console.log(`uma nova nota - ${titulo} - foi criada! com o seguinte texto -s ${texto}`);
    }

    render() {
        return (
            <section className='conteudo'>
                <FormDeCadastro criarNota={this.criarNota} /> {/*chamada de componente*/}
                <ListaDeNotas />
            </section>
        );
    }
}

export default App;