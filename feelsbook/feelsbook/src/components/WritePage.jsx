import React, { Component } from 'react';
import './css/MainContainer.css';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import axios from 'axios';

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const keyfile = require('./key.json');

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    iam_apikey: keyfile.key,
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
});

class WritePage extends Component {

    constructor() {
        super()
        this.state = {
            currentTab: 'write',
            moodText: ""
        }

        var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
        var keyfile = require('./key.json');

        var toneAnalyzer = new ToneAnalyzerV3({
            version: '2017-09-21',
            iam_apikey: keyfile.key,
            url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
        });
    } 

    getMoods = () => {
        console.log('hello world');
        console.log(this.state.moodText);
        toneAnalyzer.tone(
            {
                tone_input: this.state.moodText,
                content_type: 'text/plain'
            },
            function (err, tone) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('tone endpoint:');
                    console.log(JSON.stringify(tone, null, 2));
                    console.log('length: ' + tone.document_tone.tones.length);
                    var highscore = 0;
                    var strongestTone = '';
                    for (var i = 0; i < tone.document_tone.tones.length; i++) {
                        var tone_id = tone.document_tone.tones[i].tone_id;
                        if (tone.document_tone.tones[i].score > highscore) {
                            highscore = tone.document_tone.tones[i].score;
                            console.log("High score: " + highscore);
                            strongestTone = tone.document_tone.tones[i].tone_id
                            console.log("strongestTone: " + strongestTone);
                        } 
                        console.log("mood: " + tone.document_tone.tones[i]);
                        if (strongestTone === 'anger') {
                            document.body.style.backgroundColor = "red";
                        } else if (strongestTone === 'fear') {
                            document.body.style.backgroundColor = "black";
                        } else if (strongestTone === 'joy') {
                            document.body.style.backgroundColor = "yellow";
                        } else if (strongestTone === 'sadness') {
                            document.body.style.backgroundColor = "blue";
                        } else if (strongestTone === 'analytical') {
                            document.body.style.backgroundColor = "teal";
                        } else if (strongestTone === 'confident') {
                            document.body.style.backgroundColor = "orange";
                        } else if (strongestTone === 'tentative') {
                            document.body.style.backgroundColor = "pink";
                        }
                    }
                }
            }
        );
    }
    
    handleChange = (e) => {
        this.setState({ 
            moodText: e.target.value 
        });
    }

    render() {
        return (
            <Form className='WritePage'>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Row>
                        <Col sm={10}>
                            <Form.Control placeholder="Title" className="light-transparency" />
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" onClick={this.getMoods}>Save Entry</Button>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        rows="15" 
                        placeholder="Write Here!" 
                        className="light-transparency"
                        value={this.state.moodText}
                        onChange={this.handleChange}
                        />
                </Form.Group>
            </Form>
        );
    }
}

export default WritePage;
