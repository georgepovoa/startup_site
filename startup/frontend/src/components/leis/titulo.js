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
            loading:true,
        }
    }

    async componentDidMount() {


        console.log(this.state.loading + "tt")
        var lista_recebidos = this.props.lista_de_subordinados
        var string_list = "lista/{lista_id}?"

        if (lista_recebidos.constructor === Array) {


            var artigo = []
            var capitulo = []

            lista_recebidos.map(async i => {
                string_list += "item_ids="+i+"&"


               
            })
            console.log(string_list)
            var subordinado = await axios.get('http://127.0.0.1:3000/' + string_list)
            console.log(subordinado)
            console.log(subordinado.data)
            console.log(subordinado.data[0])
            if (subordinado.data[0].tipo == "artigo") {
                artigo = subordinado.data
            }
            else {
                capitulo = subordinado.data
            }
            console.log(capitulo)
            console.log(artigo)


            this.setState({
                capitulos: capitulo,
                artigos: artigo,
                loading:false
            })
        }
        console.log(this.state.loading + "tt")


    }

    render() {

        
        const { capitulos, isOpen, artigos } = this.state;


        const url = Object.values(this.props.custom_list)

        const id_custom_view = url

        return (<div className="titulo">
            <p onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto}</p>
            {/* {lista_de_capitulos.map(itens => {
                if (itens.titulo == this.props.id_titulo) {
                    return <Capitulos id_capitulo={itens.id} texto={itens.texto} aberto={isOpen} ></Capitulos>
                }



            })} */}
            {capitulos.map(itens => {
                console.log("funcao dentro do map")
                console.log(itens)
                console.log(capitulos)


                return <Capitulos id_capitulo={itens._id} texto={itens.texto} aberto={isOpen} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens.subordinado}></Capitulos>


            })}


            {/* {lista_de_artigos.map(itens => {
                if (itens.capitulo == "" && itens.titulo === this.props.id_titulo) {

                    return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} ></Artigo >
                }
            })} */}

            {artigos.map(itens => {
                return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens._id} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens.subordinado} ></Artigo >

            })}




        </div>
        )

    }
}

export default Titulo;