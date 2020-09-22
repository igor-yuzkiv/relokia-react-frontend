import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Auth from "./Auth";
import Config from "../Config/Config"

const serialize = require("form-serialize");

export default function Login() {

    async function handleSubmit() {
        let requestBody = serialize(document.getElementById("login_form"));
        const response = await fetch(
            `${Config.api.base_url}auth/login`,
            {
                method: "POST",
                headers: Config.api.headers,
                body: requestBody,
            });

        const data = await response.json();
        if (response.status === 200) {
            Auth.login(data.api_key, data.user.name, data.user.email, JSON.stringify(data.user.roles));
        } else {
            console.log(data)
        }
    }

    return (
        <Container>
            <Row>
                <Col sm={6} className="offset-3">
                    <Form id="login_form">
                        <Form.Group>
                            <Form.Label> Email </Form.Label>
                            <Form.Control type="email" name="email"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" name="password"/>
                        </Form.Group>
                        <Form.Group>
                            <Button className="form-control btn-success" type="button"
                                    onClick={handleSubmit}> Sign In </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}