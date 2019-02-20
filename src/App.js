import React, { Component } from 'react';
import logo from "./logo.svg"
import './App.css';
import ReactForWorld from './Components/ReactForWorld';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <ReactForWorld name="sara" />
          <ReactForWorld name="Cahal" />
          <ReactForWorld name="Edite" />
        </div>
      </div>
    );
  }
}

export default App;
