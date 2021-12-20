import React from 'react';

import SubSec from './subsec';
import Artigo from './artigos';
import axios from 'axios';
import { Artigos_lista, Subsecao_lista } from './listas'
import * as data from "./data.json";
import * as data_q from "./data_questoes.json"
import Questoes from './questoes';

class Secoes extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            subSec: null,
            artigos: null,
            isOpen: false,
        }

    }



    async componentDidMount() {
        var lista_recebidos = this.props.lista_de_subordinados


        var artigo = null
        var subsecoes = null

        lista_recebidos.map(async i => {
            var subordinado = await axios.get('http://127.0.0.1:3000/' + i)
            if (subordinado.data[0].tipo == "artigo") {
                artigo.push(subordinado.data[0])
            }
            else {
                subsecoes.push(subordinado.data[0])
            }
        })


        this.setState({
            subSec: subsecoes,
            artigos: artigo
        })

    }

    render() {
        const { subSec, isOpen, artigos } = this.state;

        const url = Object.values(this.props.custom_list)

        const id_custom_view = url
        const lista_custom_filter_subsecao = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].subsecoes
        const lista_custom_filter_artigo = data.lei_personalizada.filter(i => i.id == id_custom_view)[0].artigos

        const user = this.props.current_user
        var lista_custom_filter_questao = []
        var tem_questao = false

        const lista_custom_filter_questao_prep = data_q[user]
        if (String(lista_custom_filter_questao_prep) !== "undefined") {
            lista_custom_filter_questao = Object.values(lista_custom_filter_questao_prep).filter(i => i.secao == this.props.id_secoes && i.secao !== "" && i.subsecao === "")
            if (lista_custom_filter_questao.length > 0) { tem_questao = true }
        }

        if (this.props.aberto) {
            return (<div className="secao">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_secoes} {tem_questao === true && <p>...</p>}</p>


                {lista_custom_filter_questao.map(i => {
                    if (isOpen) {
                        return <Questoes texto={i.texto_item} ano={i.ano} cargo={i.cargo} banca={i.banca} orgao={i.orgao} aberto={isOpen}></Questoes>
                    }
                })}

                {subSec || artigos ? subSec.sort(function (a, b) {
                    return parseFloat(a._id) - parseFloat(b._id);
                }).map(itens => {
                    return <SubSec aberto={isOpen} texto={itens.texto} id_subsec={itens._id} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens.subordinado} />
                }):<div></div>}

                {subSec || artigos ? artigos.sort(function (a, b) {
                    
                    return parseFloat(a._id) - parseFloat(b._id);
                }).map(itens => {
                    return <Artigo aberto={isOpen} texto={itens.texto} id_artigo={itens._id} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens.subordinado} />
                }):
                <div></div>}
                

            </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default Secoes;