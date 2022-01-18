import React from 'react';

import Artigo from './artigos';
import axios from 'axios';

import * as data_q from "./data_questoes.json"
import Questoes from './questoes';

class SubSec extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      //subSec : [],
      isOpen: false,
      artigos: [],
    }
  }
  async componentDidMount() {
    var lista_recebidos = this.props.lista_de_subordinados
    string_list += "item_ids="+i+"&"



    var artigo = []

    lista_recebidos.map(async i => {
      string_list += "item_ids="+i+"&"

      
    })
    var subordinado = await axios.get('http://127.0.0.1:3000/' + i)
      artigo.push(subordinado.data)


    this.setState({ artigos: artigo })
  }

  render() {
    const { artigos, isOpen } = this.state;

    const url = Object.values(this.props.custom_list)
    const id_custom_view = url

    const user = this.props.current_user
    var lista_custom_filter_questao = []
    var tem_questao = false

    const lista_custom_filter_questao_prep = data_q[user]
    if (String(lista_custom_filter_questao_prep) !== "undefined") {
      lista_custom_filter_questao = Object.values(lista_custom_filter_questao_prep).filter(i => i.subsecao == this.props.id_subsec && i.subsecao !== "")
      if (lista_custom_filter_questao.length > 0) { tem_questao = true }
    }
    if (this.props.aberto) {
      return (<div className="subsec">

        <p onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto} - ID {this.props.id_subsec} {tem_questao === true && <p>...</p>}</p>

        {/* {lista_de_artigos.map(itens => {
          if (this.props.id_subsec === String(parseInt(itens.subsec))) {
            return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} />
          }

        })} */}
        {lista_custom_filter_questao.map(i => {
          if (isOpen) {
            return <Questoes texto={i.texto_item} ano={i.ano} cargo={i.cargo} banca={i.banca} orgao={i.orgao} aberto={isOpen}></Questoes>
          }
        })}

        {artigos.sort(function (a, b) {
          return parseFloat(a._id) - parseFloat(b._id);
        }).map(itens => {

          return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens._id} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens.subordinado} id_alteradas = {this.props.id_alteradas}/>


        })}


      </div>
      )
    }
    else {
      return (null)
    }
  }
}

export default SubSec;