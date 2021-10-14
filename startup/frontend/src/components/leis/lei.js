import React from 'react';
import Capitulos from './capitulos';
import ReactDOM from 'react-dom';
import Titulo from './titulo';
import axios from 'axios';

class Lei extends React.Component {
    constructor(props) {

        super(props);
        
        this.state = {
            titulos : [], 
        }
    }
      
    

    async componentDidMount(){
        const response = await axios.get('/api/titulos')

        this.setState({titulos:response.data})
    }

    render() {
        const {titulos} = this.state;
        const lista_de_titulos = Object.values(titulos)
        

       return(<div>
           {console.log(lista_de_titulos)}
            {lista_de_titulos.map(t =>(
                <div className = "titulo-class">
                    <Titulo id_titulo = {t.id} key = {t.id} texto = {t.texto}/>
                </div>
             ) )}
            </div>
       )
        
    }
}

export default Lei;