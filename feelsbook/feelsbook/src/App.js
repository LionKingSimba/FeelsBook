import React, { Component } from 'react';
import './App.css';
// import Title from './components/Title'
// import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Title></Title> */}
        {/* <MainContainer></MainContainer> */}
        <form>
          <input type="text" action="http://localhost:8080" method="POST"></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}

export default App;