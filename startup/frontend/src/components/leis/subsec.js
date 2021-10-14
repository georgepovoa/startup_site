import React from 'react';

import Artigo from './artigos';
import axios from 'axios';

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
    //    const response = await api.get('subsec')

    //    this.setState({subSec:response.data})
    const resposta = await axios.get('/api/artigo')

    this.setState({ artigos: resposta.data })

  }

  render() {
    const { artigos, isOpen } = this.state;
    const lista_de_artigos = Object.values(artigos)

    if (this.props.aberto) {
      return (<div>

        <h6 onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto} - ID {this.props.id_subsec}</h6>

        {lista_de_artigos.map(itens => {
          if (this.props.id_subsec.trim() === String(parseInt(itens.subsec.trim()))) {
            return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens.id_artigo} />
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