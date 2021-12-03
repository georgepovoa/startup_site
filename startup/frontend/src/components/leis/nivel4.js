import React from 'react';

import axios from 'axios';

import * as data_q from "./data_questoes.json"
import Questoes from './questoes';


class Nivel4 extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            isOpen: false,

        }
    }
    async componentDidMount() {


    }

    render() {

        const { isOpen } = this.state;
        const user = this.props.current_user
        var lista_custom_filter_questao = []
        var tem_questao = false

        const lista_custom_filter_questao_prep = data_q[user]
        if (String(lista_custom_filter_questao_prep) !== "undefined") {
            lista_custom_filter_questao = Object.values(lista_custom_filter_questao_prep).filter(i => i.nivel4 == this.props.id_nivel4 && i.nivel4 !== "")
            if(lista_custom_filter_questao.length>0){
                tem_questao=true
            }
        }
        if (this.props.aberto) {
            return (<div className="nivel4">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_nivel4} {tem_questao===true && <p>...</p>}</p>
                {lista_custom_filter_questao.map(i => {
                    if (isOpen) {
                        return <Questoes texto={i.texto_item} ano={i.ano} cargo={i.cargo} banca={i.banca} orgao={i.orgao} aberto = {isOpen}></Questoes>
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

export default Nivel4;