import React from 'react';

import axios from 'axios';



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

        if (this.props.aberto) {
            return (<div>

                <h3 onClick={() => this.setState({ isOpen: !this.state.isOpen })} >{this.props.texto} - ID {this.props.id_nivel4}</h3>
                
            </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default Nivel4;