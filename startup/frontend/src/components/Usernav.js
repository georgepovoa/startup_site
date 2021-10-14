import React, {Component} from "react";

export default class UserNav extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className = "usernavdiv">
            <div className = "nome-email">
            <p className = "navfirstname">{this.props.first_name}</p>
            <p className = "email">{this.props.email} </p>
            <a href = "#">ajustar conta</a>
            </div>
            <div className = "img-usernav"></div>

        </div>
    }

}