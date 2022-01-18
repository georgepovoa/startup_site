import React from 'react';
import Capitulos from './capitulos';
import Artigo from './artigos';



import axios from 'axios';
import { UserContext } from './lei';

class Titulo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            capitulos: [],
            artigos: [],
            isOpen: false,
            loading:true,
            questoes :[],
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
            var subordinado = await axios.get('http://127.0.0.1:3000/' + string_list)
            if (subordinado.data[0].tipo == "artigo") {
                artigo = subordinado.data
            }
            else {
                capitulo = subordinado.data
            }

            
            this.setState({
                capitulos: capitulo,
                artigos: artigo,
                loading:false
            })
        }
        
        


    }

    render() {

        
        const { capitulos, isOpen, artigos } = this.state;


        const url = Object.values(this.props.custom_list)

        const id_custom_view = url

        

        if (this.props.id_alteradas.includes(this.props.id_titulo)){
            console.log("TEM MATCH TITULO")
        }

        return (
                
            
        <div className="titulo">
            <p onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto}</p>
            {capitulos.map(itens => {                
                return <Capitulos id_capitulo={itens._id} texto={itens.texto} aberto={isOpen} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens.subordinado} id_alteradas = {this.props.id_alteradas}></Capitulos>
            })}
            {artigos.map(itens => {
                return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens._id} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens.subordinado} id_alteradas = {this.props.id_alteradas}></Artigo >

            })}
                    
        </div>
        )

    }
}

export default Titulo;