import React, { Component } from 'react';
import logo from './assets/nierika.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="huirrarica nierika" />
          <h1 className="App-title">Nierika</h1>
        </header>
        <p className="App-intro">
          <p>Red Social para aprender y enseñar una Lengua Originaria</p>
        </p>
        <footer className="App-footer">
          {' '}
          <p>Powered by: Laboratoria. Made by Vaniusha</p>
        </footer>
      </div>
    );
  }
}

export default App;
