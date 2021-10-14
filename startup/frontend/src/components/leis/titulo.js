import React from 'react';
import Capitulos from './capitulos';
import ReactDOM from 'react-dom';
import Artigo from './artigos';

import axios from 'axios';

class Titulo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            capitulos: [],
            artigos: [],
            isOpen: false,
        }
    }

    async componentDidMount() {
        // const response = await axios.get('/api/capitulos')

        // this.setState({ capitulos: response.data })

        

        const resposta = await axios.get('/api/artigo')

        this.setState({ artigos: resposta.data })

    }

    render() {
        const { capitulos, isOpen, artigos } = this.state;
        const lista_de_capitulos = Object.values(capitulos)
        const lista_de_artigos = Object.values(artigos)



        return (<div>
            <h1 onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto}</h1>
            {lista_de_capitulos.map(itens => {
                if (itens.titulo === this.props.id_titulo) {
                    return <Capitulos id_capitulo={itens.id} texto={itens.texto} aberto={isOpen} ></Capitulos>
                }



            })}

            {lista_de_artigos.map(itens => {
                if (itens.capitulo == "nan" && itens.id == this.props.id_titulo) {
                    return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id_artigo} ></Artigo >
                }
            })}

            
        </div>
        )

    }
}

export default Titulo;