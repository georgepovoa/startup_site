import React from 'react';

import Nivel4 from './nivel4';

import axios from 'axios';



class Nivel3 extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            nivel4: [],

            
            isOpen: false,

        }
    }
    async componentDidMount() {
        const response = await axios.get('/api/nivel4')

        this.setState({ nivel4: response.data })


        
    }

    render() {
        const { nivel4, isOpen } = this.state;
        const lista_de_nivel4 = Object.values(nivel4)

        
        if (this.props.aberto) {
            return (<div>

                <h3 onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_nivel3}</h3>

                {lista_de_nivel4.map(itens => {
                    if (this.props.id_nivel3.trim() === itens.nivel3.trim()) {
                        return <Nivel4 aberto={isOpen} texto={itens.texto} id_nivel4={itens.id_nivel4} />
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

export default Nivel3;