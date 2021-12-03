import React from 'react';
import Capitulos from './capitulos';
import ReactDOM from 'react-dom';
import Artigo from './artigos';
import { Capitulo_lista, Artigos_lista } from "./listas"
import * as data from "./data.json";



import axios from 'axios';

class Titulo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            capitulos: Capitulo_lista,
            artigos: Artigos_lista,
            isOpen: false,
        }
    }

    async componentDidMount() {
        // const response = await axios.get('/api/capitulos')

        // this.setState({ capitulos: response.data })



        // const resposta = await axios.get('/api/artigo')

        // this.setState({ artigos: resposta.data })

    }

    render() {
        const { capitulos, isOpen, artigos } = this.state;
        const lista_de_capitulos = Object.values(capitulos)
        const lista_de_artigos = Object.values(artigos)


        const url = Object.values(this.props.custom_list)

        const id_custom_view = url
        const lista_custom_filter_capitulo = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].capitulos
        const lista_custom_filter_artigo = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].artigos

        return (<div className="titulo">
            <p onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto}</p>
            {/* {lista_de_capitulos.map(itens => {
                if (itens.titulo == this.props.id_titulo) {
                    return <Capitulos id_capitulo={itens.id} texto={itens.texto} aberto={isOpen} ></Capitulos>
                }



            })} */}

            {lista_de_capitulos.filter(i => lista_custom_filter_capitulo.includes(i.id)).map(itens => {
                if (itens.titulo == this.props.id_titulo) {
                    return <Capitulos id_capitulo={itens.id} texto={itens.texto} aberto={isOpen} custom_list = {id_custom_view} current_user = {this.props.current_user}></Capitulos>
                }



            })}


            {/* {lista_de_artigos.map(itens => {
                if (itens.capitulo == "" && itens.titulo === this.props.id_titulo) {

                    return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} ></Artigo >
                }
            })} */}

            {lista_de_artigos.filter(i => lista_custom_filter_artigo.includes(i.id)).map(itens => {
                if (itens.capitulo == "" && itens.titulo === this.props.id_titulo) {

                    return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} custom_list = {id_custom_view} current_user = {this.props.current_user}></Artigo >
                }
            })}




        </div>
        )

    }
}

export default Titulo;