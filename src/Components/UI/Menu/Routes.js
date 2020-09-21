import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../../Home";
import Login from "../../Auth/Login";
import Registration from "../../Auth/Registration";
import TicketList from "../../TicketList";
import TicketCreate from "../Ticket/TicketCreate";

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/ticket-list" component={TicketList}/>
            <Route path="/ticket-create" component={TicketCreate}/>
        </Switch>
    )
}