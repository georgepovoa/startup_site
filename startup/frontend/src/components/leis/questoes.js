import React from 'react';

class Questoes extends React.Component {
    render() {
        if (this.props.aberto) {
            return (<div className="questoes">
                <p>{this.props.texto}</p>
                <p>{this.props.banca}-{this.props.orgao}-{this.props.cargo}({this.props.ano})</p>
            </div>
            )
        }
        else {
            return (null)
        }
    }
}

export default Questoes;