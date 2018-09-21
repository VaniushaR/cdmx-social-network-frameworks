//Componente Login para ingresar con Facebook
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <p className="App-intro">
        <h2>Red Social para aprender y enseñar una Lengua Originaria</h2>
        <h3>Sign in or Sing up</h3>
        <button type="button" className="btn btn-primary">
          Login con Facebook
        </button>
      </p>
    );
  }
}

export default Login;
