import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Title></Title> */}
          <MainContainer className='active'></MainContainer>
      </div>
    );
  }
}

export default App;
