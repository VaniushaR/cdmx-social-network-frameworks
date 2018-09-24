//Componente Login para ingresar con Facebook
import React, { Component } from 'react';
import firebase from 'firebase';
import Navbar from './Navbar';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user }); //se resume user¨= user
    });
  }
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.error(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(result =>
        console.log(`${result.user.email} ha terminado su sesión.`)
      )
      .catch(error =>
        console.log(`Ha ocurrido un error ${error.code}: ${error.message}`)
      );
  }
  renderLogin() {
    //if User login
    if (this.state.user) {
      return (
        <div>
          <img
            className="profile"
            src={this.state.user.photoURL}
            alt={this.state.user.displayName}
          />
          <h3> Bienvenid@ {this.state.user.displayName} !!</h3>
          <Navbar />
          <button className="btn btn-secondary" onClick={this.handleLogout}>
            Salir
          </button>
        </div>
      );
    } else {
      //if user aren't log
      return (
        <button
          type="button"
          onClick={this.handleAuth}
          className="btn btn-primary"
        >
          Login con Google
        </button>
      );
    }
  }

  render() {
    return (
      <div className="App-intro">
        <h2>Red Social para aprender y enseñar una Lengua Originaria</h2>
        <h3>Sign in or Sing up</h3>
        {this.renderLogin()}
      </div>
    );
  }
}

export default Login;

/*<button
type="button"
onClick={this.handleAuth}
className="btn btn-primary"
>
Login con Google
</button> */
