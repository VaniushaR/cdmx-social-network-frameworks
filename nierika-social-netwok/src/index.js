import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: 'AIzaSyCgNc_FLBAnpD_90joGLfphWunHY1OYjns',
  authDomain: 'nierika-7a8d3.firebaseapp.com',
  databaseURL: 'https://nierika-7a8d3.firebaseio.com',
  projectId: 'nierika-7a8d3',
  storageBucket: 'nierika-7a8d3.appspot.com',
  messagingSenderId: '795639442168'
});

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

//ReactDOM.render(<Splash />, document.getElementById('root'), () => {
//  setTimeout(() => {
//    ReactDOM.render(<App />, document.getElementById('root'));
//    window.history.pushState(null, 'Login', 'login');
//  }, 3000);
//});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
