import React, {Component} from "react";
import {Button, ButtonToolbar, ButtonGroup, Container, Row, Table, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import SendRequest from "../API/SendRequest";


export default class TicketList extends Component {
    constructor() {
        super();
        this.state = {tableData: []};
    }

    async getTableData() {
        const response = await SendRequest.apiRequest("ticket/get-list");
        return await response.json();
    }

    async componentDidMount() {
        this.getTableData().then((data) => {
            this.setState({ tableData: data });
        })
    }

    render() {
        return (
            <Container>
                <Row className="btn-toolbar Panel">
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="mr-3" aria-label="First group">
                            <Button className="btn-success" as={Link} to="/ticket/create"> Create Ticket </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Row>
                <Row>
                    <Table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Assignee</th>
                                <th>Reporter</th>
                                <th>Created</th>
                                <th>Updated</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-hover">
                            {this.state.tableData.map( (item, i) => {
                                return <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.status}</td>
                                    <td>{item.assignee}</td>
                                    <td>{item.reporter}</td>
                                    <td>{item.created_at}</td>
                                    <td>{item.updated_at}</td>
                                    <td>
                                        <Button as={Link} to={`/ticket/edit/${item.id}`} className="btb-sm btn-success">Edit</Button>
                                        <Button className="btb-sm btn-warning">Delete</Button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Row>

            </Container>
        );
    }
}