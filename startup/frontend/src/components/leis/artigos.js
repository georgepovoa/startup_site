import React from 'react';
import Nivel2 from './nivel2';
import axios from 'axios';



class Artigo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            nivel2: [],

            isOpen: false,

        }
    }
    async componentDidMount() {
        const response = await axios.get('/api/nivel2')

        this.setState({ nivel2: response.data })

        
    }

    render() {
        const { nivel2, isOpen } = this.state;
        const lista_de_nivel2 = Object.values(nivel2)
        

        if (this.props.aberto) {
            return (<div>

                <h3 onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_artigo}</h3>

                {lista_de_nivel2.map(itens => {
                    if (this.props.id_artigo.trim() === itens.artigo.trim()) {
                        return <Nivel2 aberto={isOpen} texto={itens.texto} id_nivel2={itens.id_nivel2} />
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