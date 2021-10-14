import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
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
                    <Route exact path="/"><p className = "homepage"> this is Home Page</p></Route>
                    <Route path="/join" component={RoomJoinPage} />
                    <Route path="/create" component={CreateRoomPage}></Route>
                    <Route path="/lei" component={Lei}></Route>

                </Switch>
            </Router>
            </div>
        )
    }

}