import React from 'react';
import Artigo from './artigos';
import axios from 'axios';
import Questoes from './questoes';

class SubSec extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      //subSec : [],
      isOpen: false,
      artigos: [],
      questoes: [],

    }
  }
  async componentDidMount() {
    var lista_recebidos = this.props.lista_de_subordinados
    var string_list = "lista/{lista_id}?"
    var artigo = []
    lista_recebidos.map(async i => {
      string_list += "item_ids="+i+"&"
    })
    var subordinado = await axios.get('http://127.0.0.1:3000/' + string_list)
    if (subordinado.data[0].tipo == "artigo") {
        artigo = subordinado.data
    }
    var questoes = []
    if (this.props.id_alteradas.includes(this.props.id_secoes)) {
        questoes = await (await axios.get("http://127.0.0.1:3000/get_q_individual/" + this.props.current_user + "/questao/" + this.props.id_secoes)).data

    }

    var questoes = []
    if (this.props.id_alteradas.includes(this.props.id_subsec)) {
        questoes = await (await axios.get("http://127.0.0.1:3000/get_q_individual/" + this.props.current_user + "/questao/" + this.props.id_subsec)).data
      }


    this.setState({ artigos: artigo,questoes: questoes })
  }

  render() {
    const { artigos, isOpen,questoes } = this.state;
    const url = Object.values(this.props.custom_list)
    const id_custom_view = url
    const user = this.props.current_user
    const questoes_lista = Object.values(questoes)
    var tem_questao = false
            if (questoes_lista.length != 0) {
                tem_questao = true
            }
        
    if (this.props.aberto) {
      return (<div className="subsec">

        <p onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto} - ID {this.props.id_subsec} {tem_questao === true && <p>...</p>}</p>


        
        {questoes_lista.map(i => {
                    if (isOpen) {
                        return <Questoes texto={i.correcao} id_questao = {i.id_q} aberto={isOpen}></Questoes>
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