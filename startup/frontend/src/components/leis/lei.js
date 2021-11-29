import React from 'react';
import Capitulos from './capitulos';
import ReactDOM from 'react-dom';
import Titulo from './titulo';
import axios from 'axios';
import {Titulo_lista,teste} from "./listas"
import { useParams } from "react-router";
import * as data from "./data.json";

class Lei extends React.Component {
    constructor(props) {

        super(props);
        
        this.state = {
            titulos : Titulo_lista, 

            
        }
    }
      
    

    async componentDidMount(){
        //const response = await axios.get('/api/titulos')

        //this.setState({titulos:response.data})
    }

    render() {
        const {titulos} = this.state;
        const lista_de_titulos = Object.values(titulos)
        const url = Object.values(this.props)[2].url
        const id_pv = url.split("/")[2]
        const a = data.lei_personalizada.filter(i=>i.id == id_pv)[0].titulo

       return(<div>
           <h1>{id_pv}</h1>
           

            {/* {lista_de_titulos.map(t =>(
                <div className = "titulo-class">
                    <Titulo id_titulo = {t.id} key = {t.id} texto = {t.texto}/>
                </div>
             ) )} */}

             {lista_de_titulos.filter(i => a.includes(i.id)).map((t =>(
                <div className = "titulo-class">
                    <Titulo id_titulo = {t.id} key = {t.id} texto = {t.texto} custom_list = {id_pv}/>
                </div>
             ) ))}
            </div>
       )
        
    }
}

export default Lei;