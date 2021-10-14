import React from 'react';
import Secoes from './secoes';
import Artigo from './artigos';
import axios from 'axios';


class Capitulo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            secoes: [],
            artigos: [],
            
            isOpen: false,

        }
    }
    async componentDidMount() {
        const response = await axios.get('/api/secao')

        this.setState({ secoes: response.data })

        const resposta = await axios.get('/api/artigo')

        this.setState({ artigos: resposta.data })

    }

    render() {
        const { secoes, isOpen, artigos } = this.state;
        const lista_de_secoes = Object.values(secoes)
        const lista_de_artigos = Object.values(artigos)
        



        



        if (this.props.aberto) {
            return (<div>

                <h3 onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_capitulo}</h3>
                {lista_de_secoes.map(itens => {
                    if (this.props.id_capitulo === itens.capitulo) {
                        return <Secoes aberto={isOpen} texto={itens.texto} id_secoes={itens.id_sec} />
                    }
                })}
                {lista_de_artigos.map(itens => {
                    if (this.props.id_capitulo === String(parseInt(itens.capitulo.trim())) && itens.sec === "nan")  {
                        return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id_artigo} />
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

export default Capitulo;