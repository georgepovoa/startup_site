import React, { Component } from "react";
import Lei from "./leis/lei";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import axios from "axios";


export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state ={
            current_user : []
        }
    }

    async componentDidMount(){
        const response = await axios.get("/api/current")

        this.setState({current_user : response.data})
        
    }

    render() {
        return (
            <div>
            <Router>
                
                
                <Switch>
                    <Route path="/lei/:id_pv" component={Lei}></Route>

                </Switch>
            </Router>
            </div>
        )
    }

}