//Componente Login para ingresar con Facebook
import React, { Component } from 'react';
import firebase from 'firebase';
//import { Post } from './Post';
import Navbar from './Navbar';
import Publish from './Publish';
import { db } from './Credentials';

let currenUser;
let picCurrenUser;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      pictures: []
    };
    this.LoginFB = this.LoginFB.bind(this);
    this.LoginGoogle = this.LoginGoogle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
  LoginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.error(`Error ${error.code}: ${error.message}`));
  }
  LoginFB() {
    let provider = new firebase.auth.FacebookAuthProvider();
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
    //if User have an a succesful login, get the date and the user basic data
    if (this.state.user) {
      const lastLogin = new Date();
      currenUser = this.state.user.displayName;
      console.log(currenUser);
      picCurrenUser = this.state.user.photoURL;
      console.log(picCurrenUser);
      db.collection('users')
        .add({
          name: this.state.user.displayName,
          email: this.state.user.email,
          picture: this.state.user.photoURL,
          lastLogin: lastLogin
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
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

          <Publish />
        </div>
      );
    } else {
      //if user isn't log
      return (
        <div className="main">
          <h2 className="welcome">
            Red Social para aprender y enseñar una Lengua Originaria
          </h2>
          <section className="login">
            <h2>Inicia Sesión</h2>
            <button
              type="button"
              onClick={this.LoginGoogle}
              className="btn btn-danger google"
            >
              Login con Google
            </button>
            <br />
            <br />
            <button onClick={this.LoginFB} className="btn facebook" />
          </section>
        </div>
      );
    }
  }

  render() {
    return <div className="App-intro">{this.renderLogin()}</div>;
  }
}

export default Login;
export { currenUser, picCurrenUser };
/*

handleUpload(event) {
  const file = event.target.files[0];
  const storageRef = firebase.storage().ref(`Fotos/${file.name}`);
  const storageRef = firebase.storage().ref('/fotos/');
  //const task = storageRef.put(file);
  //const storageRef = firebase.database().ref(`pictures/${file.name}`);
  //var task = storageRef.put(file);

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

 Upload complete
 console.log(task.snapshot);
      storageRef
        .child(file.name)
        .getDownloadURL()
        .then(url => {
          this.setState({
            picture: url
          });
        });
*/
