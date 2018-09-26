//Componente Login para ingresar con Facebook
import React, { Component } from 'react';
import firebase from 'firebase';
import Navbar from './Navbar';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      pic: []
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link">
                    <img
                      className="profile"
                      src={this.state.user.photoURL}
                      alt={this.state.user.displayName}
                    />
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link">
                    <h3> {this.state.user.displayName}</h3>
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <button className="btn btn-danger" onClick={this.handleLogout}>
                Salir
              </button>
            </div>
          </nav>
          <Navbar />
        </div>
      );
    } else {
      //if user aren't log
      return (
        <div>
          <h2>Red Social para aprender y enseñar una Lengua Originaria</h2>
          <h4>Inicia Sesión</h4>
          <button
            type="button"
            onClick={this.handleAuth}
            className="btn btn-primary"
          >
            Login con Google
          </button>
        </div>
      );
    }
  }

  render() {
    return <div className="App-intro">{this.renderLogin()}</div>;
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
