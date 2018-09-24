import React, { Component } from 'react';
import logo from './assets/nierika.jpg';
import './App.css';

import Footer from './components/Footer';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Nierika Huirrarica" />
          <h1 className="App-title">Nierika</h1>
        </header>

        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
