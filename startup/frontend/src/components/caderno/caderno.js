import React from 'react';
import axios from 'axios';
import cookie from "react-cookies";
import Lei_caderno from '../leis/lei_caderno';




class Caderno extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            lei : [],
            ativos : [],
            falta_escolher : [],
            lei_ativada:false,
            lista_teste_lei:[],
        }
    }



    async componentDidMount() {
        
        const response_api = await axios.get("http://127.0.0.1:3000/lei/caderno/todos")
        console.log(response_api.data)
        this.setState({
            lei: response_api.data,
            falta_escolher:response_api.data
        })
    }


    escolher_click(e,item){
        var lista_escolhidos = this.state.ativos
        var lista_para_escolher = this.state.falta_escolher
        var para_remover = []
        para_remover.push(item)
        lista_escolhidos.push(item)
        for (let i = lista_para_escolher.length-1; i >=0 ; i--) {
            const element = lista_para_escolher[i];

            if (item.caderno_tds_subordinados.includes(element._id)){
                para_remover.push(element)
                lista_escolhidos.push(element)
                
            }
            
        }

        var lista_para_state = lista_para_escolher.filter(i => !para_remover.includes(i))

        

        this.setState({
            falta_escolher: lista_para_state,
            ativos:lista_escolhidos

            
        })
    }

    remove_button(e,item){
        var lista_escolhidos = this.state.ativos
        var lista_para_escolher = this.state.falta_escolher
        var para_remover = []
        lista_para_escolher.push(item)
        para_remover.push(item)

        for (let i = 0; i < lista_escolhidos.length; i++) {
            const element = lista_escolhidos[i];
            if (item.caderno_tds_subordinados.includes(element._id)){
                para_remover.push(element)
                lista_para_escolher.push(element)
                
            }

            if (item.caderno_tds_superiores.includes(element._id)){
                
                var elemento_mudado = element
                elemento_mudado._id = -1
                
                lista_para_escolher.push(elemento_mudado)
                
            }

        }
        var lista_para_state = lista_escolhidos.filter(i=> !para_remover.includes(i))
        

        this.setState({
            ativos:lista_para_state,
            falta_escolher : lista_para_escolher
        })

    }
    async btn_fnc(e){
        var string_params = "/?"
        console.log(this.state.ativos)
        for (let i = 0; i < this.state.ativos.length; i++) {
            const element = this.state.ativos[i];
            string_params += "ids="+element._id+"&"
        }
        const response_api = await axios.get("http://localhost:3000/teste/caderno/lista_filhos"+string_params)
        console.log(response_api.data)
        this.setState({
            lei_ativada: !this.state.lei_ativada,
            lista_teste_lei:response_api.data
            
        })
    }

    render() {

     return <div class = "caderno-react-main">
          <div class = "cadernoreact">
         <div class = "escolher">
            <h1> Escolher</h1>
            <div class = "escolher-itens">
                {this.state.falta_escolher.sort(function(first, second) {
 return first.ordem - second.ordem;
}).map(item => item)
  .filter((value, index, self) => self.indexOf(value) === index)
.map((i,index) =>(
                    <p className='caderno-escolher-item' onClick={(e) =>this.escolher_click(e,i)} style= {index%2==0?{background:"rgb(44, 47, 51)"}:{background:"rgb(25,28,32)"}}>{i.texto}</p>
                ))}
            </div>

         </div>

         <div className='escolhidos'>
            <h1>Escolhidos</h1>
            {this.state.ativos.sort(function(first, second) {
 return first.ordem - second.ordem;
}).map(item => item)
.filter((value, index, self) => self.indexOf(value) === index).map((i,index) =>(
                    <div class = "create-caderno-item-escolhidos" style= {index%2==0?{background:"rgb(44, 47, 51)"}:{background:"rgb(25,28,32)"}}> 
                        <p >{i.texto}</p><button class = "create-caderno-remove-item" onClick={(e) => this.remove_button(e,i)}>X</button>
                    </div>
                ))}
         </div>

         <div class = "create-caderno-lei">
             <h1>create-caderno-lei</h1>
             {this.state.lei_ativada ? <div><Lei_caderno ativos = {this.state.lista_teste_lei}>{console.log(this.state.ativos,"ATIVOS")}</Lei_caderno></div>:<div></div>}

         </div>
     </div>     
        <div class = "criar-caderno-btn-area">
            <button onClick={(e) => this.btn_fnc()}> Visualizar Lei </button>
        </div>   
     </div>
        }
}

export default Caderno;


