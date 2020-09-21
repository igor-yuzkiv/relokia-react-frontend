import React from "react";
import {Button, ButtonToolbar, ButtonGroup, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function TicketList() {
    return (
        <Container>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-3" aria-label="First group">
                    <Button className="btn-success" as={Link} to="/ticket-create"> Create Ticket </Button>
                </ButtonGroup>
            </ButtonToolbar>
        </Container>
    );
}