import React from "react";
import Auth from "../../Auth/Auth";
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";

export default function ContentEnd () {
    var links = "";
    if (Auth.isLogin()) {
        links = <Navbar.Text>
            <Link to=''> {Auth.getUserName()} </Link> |
            <Link to='' onClick={Auth.logout}> Logout </Link>
        </Navbar.Text>
    }else {
        links = <Navbar.Text>
            <Link to="/login"> Sign In </Link> OR
            <Link to="/registration"> Sign Up </Link>
        </Navbar.Text>
    }
    return links
}