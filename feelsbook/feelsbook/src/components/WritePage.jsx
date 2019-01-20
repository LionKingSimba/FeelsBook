import React, { Component } from 'react';
import './css/MainContainer.css';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class WritePage extends Component {

    render() {
        return (
            <Form className='WritePage'>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Row>
                        <Col sm={10}>
                            <Form.Control placeholder="Title" className="light-transparency" />
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary">Save Entry</Button>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="15" placeholder="Write Here!" className="light-transparency" />
                </Form.Group>
            </Form>
        );
    }
}

export default WritePage;
