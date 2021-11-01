import React from 'react';
import Nivel2 from './nivel2';
import axios from 'axios';
import {Nivel_2_lista} from './listas'



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
        console.log(lista_de_nivel2)
        console.log(this.props.id_artigo)

        if (this.props.aberto) {
            return (<div>

                <h3 onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_artigo}</h3>

                {lista_de_nivel2.map(itens => {
                    if (this.props.id_artigo == itens.artigo) {
                        return <Nivel2 aberto={isOpen} texto={itens.texto} id_nivel2={itens.id} />
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