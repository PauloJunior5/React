import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormDeCadastro from './components/FormDeCadastro';

class App extends Component {
    render() {
        return (
            <>
                <FormDeCadastro /> {/*isso é um componente*/}
                <ListaDeNotas />
            </>
        );
    }
}

export default App;