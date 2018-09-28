//Componente Login para ingresar con Facebook
import React, { Component } from 'react';
import firebase from 'firebase';
import Post from './Post';
import Navbar from './Navbar';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      pictures: []
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user }); //se resume user¨= user
    });
    firebase
      .database()
      .ref('pictures')
      .on('child_added', snapshot => {
        this.setState({
          pictures: this.state.pictures.concat(snapshot.val())
        });
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
  handleUpload(event) {
    const file = event.target.files[0];
    //const storageRef = firebase.storage().ref(`Fotos/${file.name}`);
    //const storageRef = firebase.storage().ref('/fotos/');
    //const task = storageRef.put(file);
    const storageRef = firebase.database().ref(`pictures/${file.name}`);
    var task = storageRef.put(file);

    task.on(
      'state_changed',
      snapshot => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValue: percentage
        });
      },
      error => {
        console.error(error.message);
      },
      () =>
        storageRef.getDownloadURL().then(url => {
          const record = {
            photoURL: this.state.user.photoURL,
            displayName: this.state.user.displayName,
            image: url
            //image: task.snapshot.downloadURL
          };
          const databaseRef = firebase.database().ref('pictures');
          const newPicture = databaseRef.push();
          newPicture.set(record);
        })
    );
  }

  // Upload complete
  /* console.log(task.snapshot);
        storageRef
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            this.setState({
              picture: url
            });
          });
          */

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
          <Post onUpload={this.handleUpload} />
          {this.state.pictures.map(picture => (
            <div>
              <img width="520" src={picture.image} />
              <br />
              <img
                width="520"
                src={picture.photoURL}
                alt={picture.displayName}
              />
              <br />
              <span>{picture.displayName}</span>
            </div>
          ))}
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
