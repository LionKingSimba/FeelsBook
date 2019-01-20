import React, { Component } from 'react';
import './css/EntryCard.css';
import { Card } from 'react-bootstrap';

class EntryCard extends Component {
    render() {
        return (
            <Card>
                <Card.Body>Title of the entry.</Card.Body>
            </Card>
        );
    }
}

export default EntryCard;
