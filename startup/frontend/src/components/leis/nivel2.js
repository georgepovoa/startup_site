import React from 'react';
import Nivel3 from './nivel3';

import axios from 'axios';



import * as data_q from "./data_questoes.json"
import Questoes from './questoes';

class Nivel2 extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            nivel3: null,


            isOpen: false,

        }
    }
    async componentDidMount() {
        var lista_recebidos = this.props.lista_de_subordinados
        var string_list = "lista/{lista_id}?"




        if (lista_recebidos.constructor === Array) {


            var nivel3 = []

            lista_recebidos.map(async i => {
                string_list += "item_ids="+i+"&"
                
            })
            var subordinado = await axios.get('http://127.0.0.1:3000/' + string_list)
            nivel3 = subordinado.data


            this.setState({ nivel3: nivel3 })
        }


    }

    render() {
        const { nivel3, isOpen } = this.state;
        const url = Object.values(this.props.custom_list)

        const id_custom_view = url


        const user = this.props.current_user
        var lista_custom_filter_questao = []
        var tem_questao = false

        const lista_custom_filter_questao_prep = data_q[user]
        if (String(lista_custom_filter_questao_prep) !== "undefined") {
            lista_custom_filter_questao = Object.values(lista_custom_filter_questao_prep).filter(i => i.nivel2 == this.props.id_nivel2 && i.nivel2 !== "" && i.nivel3 === "")
            if (lista_custom_filter_questao.length > 0) { tem_questao = true }
        }



        if (this.props.aberto) {
            return (<div className="nivel2">

                <p onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{this.props.texto} - ID {this.props.id_nivel2} {tem_questao === true && <p>...</p>}</p>

                {lista_custom_filter_questao.map(i => {
                    if (isOpen) {
                        return <Questoes texto={i.texto_item} ano={i.ano} cargo={i.cargo} banca={i.banca} orgao={i.orgao} aberto={isOpen}></Questoes>
                    }
                })}
                {nivel3 ? nivel3.map(itens => {
                    return <Nivel3 aberto={isOpen} texto={itens.texto} id_nivel3={itens._id} custom_list={id_custom_view} current_user={this.props.current_user} lista_de_subordinados={itens.subordinado} />
                }):<div></div>}
                
            </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default Nivel2;