import React from 'react';
import Capitulos from './capitulos';
import ReactDOM from 'react-dom';
import Titulo from './titulo';
import axios from 'axios';
import { Titulo_lista } from "./listas"
import { useParams } from "react-router";
import * as data from "./data.json";

class Lei extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            titulos: [],
            current_user: "",


        }
    }



    async componentDidMount() {
        const response_api = await axios.get("http://127.0.0.1:3000/titulo")


        const response = await axios.get("/api/current")

        this.setState({
            current_user: response.data[0].email,
            titulos: response_api.data
        })
    }

    render() {
        const { titulos, current_user } = this.state;

        const lista_de_titulos = Object.values(titulos)
        const url = Object.values(this.props)[2].url
        const id_pv = url.split("/")[2]
        const a = data.lei_personalizada.filter(i => i.id == id_pv)[0].titulo

        return (<div>
            <nav>
                <a href="/"><img src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvCBqRBPmxjNwXs1M3EMoAJtliMkhvBq9...Q... " /></a>

                <div className="divnav">
                    <a href="/homequestao">Resolver Questoes</a>

                    <a href="/feitas">Questoes Feitas</a>
                    <a href="/lei/0">Lei</a>
                    <a href="/accounts/logout">Logout</a>

                    <a href="/accounts/login">Login</a>

                </div>
            </nav>
            <h1>{id_pv}</h1>
            <h1>{current_user}</h1>


            {/* {lista_de_titulos.map(t =>(
                <div className = "titulo-class">
                    <Titulo id_titulo = {t.id} key = {t.id} texto = {t.texto}/>
                </div>
             ) )} */}

            {lista_de_titulos.map((t => (
                <div className="titulo-class">
                    {console.log(t._id, t.subordinado)}
                    <Titulo id_titulo={t._id} key={t._id} texto={t.texto} custom_list={id_pv} current_user={current_user} lista_de_subordinados={t.subordinado} />
                </div>
            )))}
        </div>
        )

    }
}

export default Lei;