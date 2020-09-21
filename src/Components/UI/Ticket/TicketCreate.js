import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

export default function TicketCreate() {
    return <>
        <Container>
            <Row>
                <Col>
                    <h1>Create ticket</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form id="create_ticket">
                        <Form.Group>
                            <Form.Label> Title </Form.Label>
                            <Form.Control type="text" name="title"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label> Assignee </Form.Label>
                            <Form.Control type="text" name="assignee"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label> Reporter </Form.Label>
                            <Form.Control type="text" name="reporter"/>
                        </Form.Group>

                        <Form.Group>
                            <Button className="form-control btn-success" type="button"
                                /*onClick={handleSubmit}*/> Create </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>

    </>;
}