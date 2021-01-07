import React, { Component } from 'react';
import ListaDeNotas from './components/listaDeNotas';
import FormDeCadastro from './components/formDeCadastro';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
    render() {
        return (
            <section className='conteudo'>
                <FormDeCadastro /> {/*chamada de componente*/}
                <ListaDeNotas />
            </section>
        );
    }
}

export default App;