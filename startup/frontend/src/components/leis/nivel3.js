import React from 'react';

import Nivel4 from './nivel4';

import axios from 'axios';


import * as data_q from "./data_questoes.json"
import Questoes from './questoes';


class Nivel3 extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            nivel4: null,


            isOpen: false,

        }
    }
    async componentDidMount() {
        var lista_recebidos = this.props.lista_de_subordinados
        var string_list = "lista/{lista_id}?"

        string_list += "item_ids="+i+"&"


        if (lista_recebidos.constructor === Array){


        var nivel4 = []

        lista_recebidos.map(async i => {
            string_list += "item_ids="+i+"&"


        })
        var subordinado = await axios.get('http://127.0.0.1:3000/' + string_list)
        nivel4.push(subordinado.data)


        this.setState({ nivel4: nivel4 })

    }}

    render() {
        const { nivel4, isOpen } = this.state;
        const user = this.props.current_user

        const url = Object.values(this.props.custom_list)
        const id_custom_view = url

        const lista_custom_filter_questao_prep = data_q[user]
        var tem_questao = false
        if (String(lista_custom_filter_questao_prep) !== "undefined") {
            lista_custom_filter_questao = Object.values(lista_custom_filter_questao_prep).filter(i => i.nivel3 == this.props.id_nivel3 && i.nivel3 !== "" && i.nivel4 === "")
            if (lista_custom_filter_questao.length > 0) { tem_questao = true }
        }

        var lista_custom_filter_questao = []

        if (this.props.aberto) {
            return (<div className="nivel3">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_nivel3} {tem_questao === true && <p>...</p>}</p>

                {lista_custom_filter_questao.map(i => {
                    if (isOpen) {
                        return <Questoes texto={i.texto_item} ano={i.ano} cargo={i.cargo} banca={i.banca} orgao={i.orgao} aberto={isOpen}></Questoes>
                    }
                })}

                {nivel4 ? nivel4.map(itens => {
                        return <Nivel4 aberto={isOpen} texto={itens.texto} id_nivel4={itens._id} custom_list={id_custom_view} current_user={this.props.current_user} id_alteradas = {this.props.id_alteradas}/>
                }):<div></div>}

            </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default Nivel3;