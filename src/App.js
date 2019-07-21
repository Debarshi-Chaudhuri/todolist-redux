import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDos from './ToDos.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"></link>
        </div >
          <ToDos />
        
      </div>
    );
  }
}

export default App;

