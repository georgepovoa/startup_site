import React from 'react';

import Artigo from './artigos';
import axios from 'axios';

import { Artigos_lista } from './listas'

import * as data from "./data.json";

class SubSec extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      //subSec : [],
      isOpen: false,
      artigos: Artigos_lista,
    }
  }
  async componentDidMount() {
    //    const response = await api.get('subsec')

    //    this.setState({subSec:response.data})
    // const resposta = await axios.get('/api/artigo')

    // this.setState({ artigos: resposta.data })

  }

  render() {
    const { artigos, isOpen } = this.state;
    const lista_de_artigos = Object.values(artigos)

    const url = Object.values(this.props.custom_list)
    const id_custom_view = url
    const lista_custom_filter_artigo = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].artigos

    if (this.props.aberto) {
      return (<div className="subsec">

        <p onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto} - ID {this.props.id_subsec}</p>

        {/* {lista_de_artigos.map(itens => {
          if (this.props.id_subsec === String(parseInt(itens.subsec))) {
            return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id} />
          }

        })} */}

        {lista_de_artigos.filter(i=> lista_custom_filter_artigo.includes(i.id)).map(itens => {
          if (this.props.id_subsec == itens.subsec && itens.subsec !=="") {
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

export default SubSec;