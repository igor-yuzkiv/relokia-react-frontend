import React from "react";
import {Alert, Navbar} from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";
import ContentEnd from "./ContentEnd";
import MenuItem from "./MenuItem";
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

            <Routes/>

        </Router>
    )
}