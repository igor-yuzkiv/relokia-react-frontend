import React, {Component} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Auth from "../Auth/Auth";
import SendRequest from "../API/SendRequest";
const serialize = require("form-serialize");


export default class TicketCreate extends Component {
    constructor() {
        super();
        this.state = {userList: []};
    }

    async getUserList() {
        const response = await SendRequest.formRequest('user/get-user-list', `api_key=${Auth.getApiKey()}`);
        return await response.json();
    }

    async componentDidMount() {
        this.getUserList().then((data) => {
            this.setState({ userList: data });
        })
    }

    async handleSubmit () {
        let requestBody = serialize(document.getElementById("create_ticket"));
        const response = await SendRequest.formRequest('ticket/create', requestBody);

        const data = await response.json();
        if (response.status === 200) {
            window.location.href = "/ticket/list";
        }else {
            console.log(data)
        }
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    <h1>Create ticket</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form id="create_ticket">
                        <Form.Control type="hidden" name="api_key" value={Auth.getApiKey()}/>
                        <Form.Group>
                            <Form.Label> Title </Form.Label>
                            <Form.Control type="text" name="title"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Reporter </Form.Label>
                            <Form.Control as="select" name="reporter">
                                {this.state.userList.map( (item, i) => {
                                    return <option key={i} value={item.id}>{item.name}</option>
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button className="form-control btn-success" type="button"
                                onClick={this.handleSubmit}> Create </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}