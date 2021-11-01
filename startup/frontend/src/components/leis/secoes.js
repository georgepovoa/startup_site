import React from 'react';

import SubSec from './subsec';
import Artigo from './artigos';
import axios from 'axios';
import {Artigos_lista,Subsecao_lista} from './listas'


class Secoes extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            subSec: Subsecao_lista,
            artigos: Artigos_lista,
            isOpen: false,
        }

    }



    async componentDidMount() {
        //const response = await axios.get('/api/subsecao')

        //this.setState({ subSec: response.data })

        //const resposta = await axios.get('/api/artigo')

        //this.setState({ artigos: resposta.data })
    }

    render() {
        const { subSec, isOpen, artigos } = this.state;
        const lista_de_subSec = Object.values(subSec)

        const lista_de_artigos = Object.values(artigos)

        




        if (this.props.aberto) {
            return (<div>

                <h3 onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_secoes}</h3>
                {lista_de_subSec.map(itens => {
                    if (this.props.id_secoes === itens.sec) {
                        return <SubSec aberto={isOpen} texto={itens.texto} id_subsec={itens.id} />
                    }
                })}

                {lista_de_artigos.map(itens => {
                    if (this.props.id_secoes === String(parseInt(itens.sec)) && itens.subsec === "") {
                        return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} />
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

export default Secoes;