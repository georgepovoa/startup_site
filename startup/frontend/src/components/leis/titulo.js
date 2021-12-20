import React from 'react';
import Capitulos from './capitulos';
import ReactDOM from 'react-dom';
import Artigo from './artigos';
import * as data from "./data.json";



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
        var lista_recebidos = this.props.lista_de_subordinados

        if ( lista_recebidos.constructor === Array) {


            var artigo = []
            var capitulo = []

            lista_recebidos.map(async i => {
                var subordinado = await axios.get('http://127.0.0.1:3000/' + i)
                if (subordinado.data[0].tipo == "artigo") {
                    artigo.push(subordinado.data)
                }
                else {
                    capitulo.push(subordinado.data)
                }
            })


            this.setState({
                capitulos: capitulo,
                artigos: artigo
            })
        }

    }

    render() {

        const { capitulos, isOpen, artigos } = this.state;


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
            {capitulos.sort(function (a, b) {
                return parseFloat(a[0]._id) - parseFloat(b[0]._id);
            }).map(itens => {


                return <Capitulos id_capitulo={itens[0]._id} texto={itens[0].texto} aberto={isOpen} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens[0].subordinado}></Capitulos>


            })}


            {/* {lista_de_artigos.map(itens => {
                if (itens.capitulo == "" && itens.titulo === this.props.id_titulo) {

                    return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} ></Artigo >
                }
            })} */}

            {artigos.sort(function (a, b) {
                return parseFloat(a[0]._id) - parseFloat(b[0]._id);
            }).map(itens => {
                return <Artigo aberto={isOpen} texto={itens[0].texto} id_artigo={itens[0]._id} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens[0].subordinado} ></Artigo >

            })}




        </div>
        )

    }
}

export default Titulo;