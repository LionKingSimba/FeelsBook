import React, { Component } from 'react';
import './css/MainContainer.css';
import WritePage from './WritePage';
import { Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import HistoryPage from './HistoryPage';
import StatisticsPage from './StatisticsPage';

class MainContainer extends Component {

  constructor () {
    super()
    this.state = {
      currentTab: 'write'
    }
  } 

  shouldRenderTab = () => {
    if (this.state.currentTab === 'write') {
      return <WritePage/>
    } else if (this.state.currentTab === 'history') {
      return <HistoryPage></HistoryPage>;
    } else if (this.state.currentTab === 'statistics') {
      return <StatisticsPage></StatisticsPage>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Card className='MainContainer'>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#write">
            <Nav.Item>
              <Nav.Link href="#write" onClick={() => this.setState({ currentTab: 'write' })}>Write</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#history" onClick={() => this.setState({ currentTab: 'history' })}>History</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#statistics" onClick={() => {
                this.setState({ currentTab: 'statistics' })
                console.log(this.state.currentTab)
              }}>Statistics</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {this.shouldRenderTab()}
        </Card.Body>
      </Card>
    );
  }
}

export default MainContainer;
