import React from 'react';
import Nivel3 from './nivel3';

import axios from 'axios';

import {Nivel_3_lista} from './listas'


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

        

        if (this.props.aberto) {
            return (<div>

                <h3 onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_nivel2}</h3>

                {lista_de_nivel3.map(itens => {
                    if (this.props.id_nivel2 == itens.nivel2) {
                        return <Nivel3 aberto={isOpen} texto={itens.texto} id_nivel3={itens.id} />
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