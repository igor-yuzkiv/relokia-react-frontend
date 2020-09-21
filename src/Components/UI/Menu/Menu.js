import React from "react";
import {Nav, Navbar} from "react-bootstrap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import TicketList from "../../TicketList";
import Registration from "../../Auth/Registration";
import Login from "../../Auth/Login";
import ContentEnd from "./ContentEnd";
import Home from "../../Home";
import MenuItem from "./MenuItem";
import TicketCreate from "../Ticket/TicketCreate";
import Routes from "./Routes";

export default function Menu() {
    return (
        <Router>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Relokia</Navbar.Brand>

                <MenuItem/>

                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <ContentEnd/>
                </Navbar.Collapse>
            </Navbar>

            <Routes />

        </Router>
    )
}