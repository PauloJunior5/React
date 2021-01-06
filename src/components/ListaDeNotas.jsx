import React, { Component } from "react";
import CardDeNotas from "./cardDeNotas/CardDeNotas";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                    return(
                        <li key={index}>
                            <div>{categoria}</div>
                            <CardDeNotas />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;