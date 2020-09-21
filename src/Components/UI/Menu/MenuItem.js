import React from "react";
import Auth from "../../Auth/Auth";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Config from "../../Config/Config";

const userRoles = Auth.getUserRoleNames()

export default function MenuItem() {
    return Config.menu.items.map((item, index) => {
        let userCan = userRoles.some( (role) => {
            return item.roles.includes(role);
        })

        if (userCan) {
            return <Nav className="mr-auto" key={index}>
                <Nav.Link as={Link} to={item.to}>{item.title}</Nav.Link>
            </Nav>
        }
    })
}