import React, { Component } from 'react';
import './css/MainContainer.css';
import { Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class MainContainer extends Component {
  render() {
    return (
      <Card className='MainContainer'>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Write</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">History</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled">Statistics</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Row>
                <Col sm={10}>
                  <Form.Control placeholder="Title" className="light-transparency"/>
                </Col>
                <Col sm={2}>
                  <Button variant="primary">Save Entry</Button>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="13" placeholder="Write Here!" className="light-transparency"/>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default MainContainer;
