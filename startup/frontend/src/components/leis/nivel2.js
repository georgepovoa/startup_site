import React from 'react';
import Nivel3 from './nivel3';

import axios from 'axios';

import {Nivel_3_lista} from './listas'

import * as data from "./data.json";




class Nivel2 extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            nivel3: Nivel_3_lista,

            
            isOpen: false,

        }
    }
    async componentDidMount() {
        //const response = await axios.get('/api/nivel3')

        //this.setState({ nivel3: response.data })

      
    }

    render() {
        const { nivel3, isOpen } = this.state;
        const lista_de_nivel3 = Object.values(nivel3)

        const url = Object.values(this.props.custom_list)
        const id_custom_view = url
        const lista_custom_filter_nivel3 = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].nivel3

        if (this.props.aberto) {
            return (<div className = "nivel2">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_nivel2}</p>

                {/* {lista_de_nivel3.map(itens => {
                    if (this.props.id_nivel2 == itens.nivel2) {
                        return <Nivel3 aberto={isOpen} texto={itens.texto} id_nivel3={itens.id} />
                    }
                })} */}

                {lista_de_nivel3.filter(i=>lista_custom_filter_nivel3.includes(i.id)).map(itens => {
                    if (this.props.id_nivel2 == itens.nivel2 && itens.nivel2!=='') {
                        return <Nivel3 aberto={isOpen} texto={itens.texto} id_nivel3={itens.id} custom_list = {id_custom_view}/>
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

export default Nivel2;