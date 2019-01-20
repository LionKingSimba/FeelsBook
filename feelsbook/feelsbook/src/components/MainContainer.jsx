import React, { Component } from 'react';
import './css/MainContainer.css';
import WritePage from './WritePage';
import { Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class MainContainer extends Component {

  constructor () {
    super()
    this.state = {
      currentTab: 'write'
    }
  }

  changeTab(tab) {
    this.setState({
      currentTab: tab
    })
  }

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
          <WritePage></WritePage>
        </Card.Body>
      </Card>
    );
  }
}

export default MainContainer;
