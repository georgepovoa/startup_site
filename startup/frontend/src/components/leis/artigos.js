import React from 'react';
import Nivel2 from './nivel2';
import axios from 'axios';
import {Nivel_2_lista} from './listas'
import Questoes from './questoes';

import * as data from "./data.json";
import * as data_q from "./data_questoes.json"



class Artigo extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            nivel2: null,

            isOpen: false,

        }
    }
    async componentDidMount() {
        var lista_recebidos = this.props.lista_de_subordinados


    var nivel2 = []
    if (lista_recebidos.constructor === Array){

    lista_recebidos.map(async i => {
      var subordinado = await axios.get('http://127.0.0.1:3000/' + i)
      nivel2.push(subordinado.data[0])
    })


    this.setState({ nivel2: nivel2 })
    }
        
    }

    render() {
        const { nivel2, isOpen } = this.state;
        
        const user = this.props.current_user
        var lista_custom_filter_questao = []
        
        const url = Object.values(this.props.custom_list)
        const id_custom_view = url
        const lista_custom_filter_nivel2 = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].nivel2
        const lista_custom_filter_questao_prep = data_q[user]
        var tem_questao = false
        if (String(lista_custom_filter_questao_prep) !== "undefined"){
            lista_custom_filter_questao = Object.values(lista_custom_filter_questao_prep).filter(i=>i.artigo == this.props.id_artigo && i.artigo !== "" && i.nivel2 ==="")
            if(lista_custom_filter_questao.length>0){tem_questao=true}
        } 

        if (this.props.aberto) {
            return (<div className = "artigo">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_artigo} {tem_questao===true && <p>...</p>}</p>


                {lista_custom_filter_questao.map(i =>{ if(isOpen){
                    return <Questoes texto = {i.texto_item} ano = {i.ano} cargo = {i.cargo} banca = {i.banca} orgao = {i.orgao} aberto = {isOpen}></Questoes>
        }})}
                {/* {lista_de_nivel2.map(itens => {
                    if (this.props.id_artigo == itens.artigo) {
                        return <Nivel2 aberto={isOpen} texto={itens.texto} id_nivel2={itens.id} />
                    }
                })} */}
                {nivel2 ?nivel2.sort(function (a, b) {
          return parseFloat(a._id) - parseFloat(b._id);
        }).map(itens => {
                        return <Nivel2 aberto={isOpen} texto={itens.texto} id_nivel2={itens._id} custom_list = {id_custom_view} current_user = {this.props.current_user} lista_de_subordinados={itens.subordinado}/>
                }) :<div></div>}
            </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default Artigo;