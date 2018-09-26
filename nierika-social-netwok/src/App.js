import React, { Component } from 'react';
import logo from './assets/nierika.jpg';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Splash from './components/Splash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashEnded: false
    };
  }

  componentDidMount() {
    if (!this.state.splashEnded) {
      setTimeout(() => this.setState({ splashEnded: true }), 3000);
    }
  }
  render() {
    //conditional rendering:
    if (!this.state.splashEnded) {
      return <Splash />;
    }
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
