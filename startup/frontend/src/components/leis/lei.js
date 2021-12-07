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
            titulos: Titulo_lista,
            current_user: "",


        }
    }



    async componentDidMount() {
        //const response = await axios.get('/api/titulos')

        //this.setState({titulos:response.data})

        const response = await axios.get("/api/current")

        this.setState({ current_user: response.data[0].email })
    }

    render() {
        const { titulos, current_user } = this.state;

        const lista_de_titulos = Object.values(titulos)
        const url = Object.values(this.props)[2].url
        const id_pv = url.split("/")[2]
        const a = data.lei_personalizada.filter(i => i.id == id_pv)[0].titulo
        console.log(current_user)

        return (<div>
            <nav>
                <ul>
                    <li><a href="/homequestao">Resolver Questoes</a></li>
                    <li><a href="/accounts/login">Login</a></li>
                    <li><a href="/feitas">Questoes Feitas</a></li>
                    <li><a href="/lei/0">Lei</a></li>
                </ul>
            </nav>
            <h1>{id_pv}</h1>
            <h1>{current_user}</h1>


            {/* {lista_de_titulos.map(t =>(
                <div className = "titulo-class">
                    <Titulo id_titulo = {t.id} key = {t.id} texto = {t.texto}/>
                </div>
             ) )} */}

            {lista_de_titulos.filter(i => a.includes(i.id)).map((t => (
                <div className="titulo-class">
                    <Titulo id_titulo={t.id} key={t.id} texto={t.texto} custom_list={id_pv} current_user={current_user} />
                </div>
            )))}
        </div>
        )

    }
}

export default Lei;