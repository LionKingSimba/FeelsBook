import React, { Component } from 'react';
import EntryCard from './EntryCard';
import { ListGroup } from 'react-bootstrap';

class HistoryPage extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroup.Item><EntryCard></EntryCard></ListGroup.Item>
                <ListGroup.Item><EntryCard></EntryCard></ListGroup.Item>
                <ListGroup.Item><EntryCard></EntryCard></ListGroup.Item>
            </ListGroup>
        );
    }
}

export default HistoryPage;
