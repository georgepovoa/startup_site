import React from 'react';

import Nivel4 from './nivel4';

import axios from 'axios';

import { Nivel_4_lista } from './listas'

import * as data from "./data.json";
import * as data_q from "./data_questoes.json"
import Questoes from './questoes';


class Nivel3 extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            nivel4: Nivel_4_lista,


            isOpen: false,

        }
    }
    async componentDidMount() {
        // const response = await axios.get('/api/nivel4')

        // this.setState({ nivel4: response.data })



    }

    render() {
        const { nivel4, isOpen } = this.state;
        const lista_de_nivel4 = Object.values(nivel4)

        const url = Object.values(this.props.custom_list)
        const id_custom_view = url
        const lista_custom_filter_nivel4 = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].nivel4

        const lista_custom_filter_questao_prep = data_q[user]
        var tem_questao = false
        if (String(lista_custom_filter_questao_prep) !== "undefined") {
            lista_custom_filter_questao = Object.values(lista_custom_filter_questao_prep).filter(i => i.nivel3 == this.props.id_nivel3 && i.nivel3 !== "" && i.nivel4 === "")
            if(lista_custom_filter_questao.length>0){tem_questao=true}
        }

        const user = this.props.current_user
        var lista_custom_filter_questao = []

        if (this.props.aberto) {
            return (<div className="nivel3">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_nivel3} {tem_questao===true && <p>...</p>}</p>

                {/* {lista_de_nivel4.map(itens => {
                    if (this.props.id_nivel3 == itens.nivel3) {
                        return <Nivel4 aberto={isOpen} texto={itens.texto} id_nivel4={itens.id} />
                    }
                })} */}

                {lista_custom_filter_questao.map(i => {
                    if (isOpen) {
                        return <Questoes texto={i.texto_item} ano={i.ano} cargo={i.cargo} banca={i.banca} orgao={i.orgao} aberto = {isOpen}></Questoes>
                    }
                })}


                {lista_de_nivel4.filter(i => lista_custom_filter_nivel4.includes(i.id)).map(itens => {
                    if (this.props.id_nivel3 == itens.nivel3 && itens.nivel3 !== '') {
                        return <Nivel4 aberto={isOpen} texto={itens.texto} id_nivel4={itens.id} custom_list={id_custom_view} current_user={this.props.current_user} />
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

export default Nivel3;