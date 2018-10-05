import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log('hola desde index, Gloria');
/*
db.collection('users')
  .add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  })
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  });

  
// Add a new document in collection "cities"
db.collection('cities')
  .doc('LA')
  .set({
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  })
  .then(function() {
    console.log('Document successfully written!');
  })
  .catch(function(error) {
    console.error('Error writing document: ', error);
  });
ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
*/

//ReactDOM.render(<Splash />, document.getElementById('root'), () => {
//  setTimeout(() => {
//    ReactDOM.render(<App />, document.getElementById('root'));
//    window.history.pushState(null, 'Login', 'login');
//  }, 3000);
//});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
