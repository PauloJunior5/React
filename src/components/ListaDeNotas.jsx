import React, { Component } from "react";
import CardDeNotas from "./CardDeNotas";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
                    return(
                        <li>
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
