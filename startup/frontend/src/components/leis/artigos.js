import React from 'react';
import Nivel2 from './nivel2';
import axios from 'axios';
import {Nivel_2_lista} from './listas'

import * as data from "./data.json";



class Artigo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            nivel2: Nivel_2_lista,

            isOpen: false,

        }
    }
    async componentDidMount() {
        //const response = await axios.get('/api/nivel2')

        //this.setState({ nivel2: response.data })

        
    }

    render() {
        const { nivel2, isOpen } = this.state;
        const lista_de_nivel2 = Object.values(nivel2)
        
        const url = Object.values(this.props.custom_list)
        const id_custom_view = url
        const lista_custom_filter_nivel2 = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].nivel2

        if (this.props.aberto) {
            return (<div className = "artigo">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_artigo}</p>

                {/* {lista_de_nivel2.map(itens => {
                    if (this.props.id_artigo == itens.artigo) {
                        return <Nivel2 aberto={isOpen} texto={itens.texto} id_nivel2={itens.id} />
                    }
                })} */}

                {lista_de_nivel2.filter(i=>lista_custom_filter_nivel2.includes(i.id)).map(itens => {
                    if (this.props.id_artigo == itens.artigo && itens.artigo !=="") {
                        return <Nivel2 aberto={isOpen} texto={itens.texto} id_nivel2={itens.id} custom_list = {id_custom_view} />
                    }
                })}

                




            </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default Artigo;