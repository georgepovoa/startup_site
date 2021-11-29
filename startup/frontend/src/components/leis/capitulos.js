import React from 'react';
import Secoes from './secoes';
import Artigo from './artigos';
import axios from 'axios';
import {Artigos_lista, Secao_lista} from "./listas"
import * as data from "./data.json";


class Capitulo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            secoes: Secao_lista,
            artigos: Artigos_lista,
            
            isOpen: false,

        }
    }
    async componentDidMount() {
        // const response = await axios.get('/api/secao')

        // this.setState({ secoes: response.data })

        //const resposta = await axios.get('/api/artigo')

        //this.setState({ artigos: resposta.data })

    }

    render() {
        const { secoes, isOpen, artigos } = this.state;
        const lista_de_secoes = Object.values(secoes)
        const lista_de_artigos = Object.values(artigos)

        const url = Object.values(this.props.custom_list)
        const id_custom_view = url
        const lista_custom_filter_secao = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].secoes
        const lista_custom_filter_artigo = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].artigos

        if (this.props.aberto) {
            return (<div className = "capitulo">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_capitulo}</p>
                {/* {lista_de_secoes.map(itens => {
                    if (this.props.id_capitulo == itens.capitulo) {
                        return <Secoes aberto={isOpen} texto={itens.texto} id_secoes={itens.id} />
                    }
                })} */}

                {lista_de_secoes.filter(i=>lista_custom_filter_secao.includes(i.id)).map(itens => {
                    if (this.props.id_capitulo == itens.capitulo) {
                        return <Secoes aberto={isOpen} texto={itens.texto} id_secoes={itens.id} custom_list = {id_custom_view}/>
                    }
                })}
                {/* {lista_de_artigos.map(itens => {
                    if (this.props.id_capitulo == itens.capitulo && itens.sec === "" && itens.capitulo !=='')  {
                        return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} />
                    }

                })} */}

                {lista_de_artigos.filter(i=>lista_custom_filter_artigo.includes(i.id)).map(itens => {
                    if (this.props.id_capitulo == itens.capitulo && itens.sec === "" && itens.capitulo !=='')  {
                        return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} custom_list = {id_custom_view} />
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