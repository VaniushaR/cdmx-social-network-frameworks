//import React, { Component } from 'react';
import firebase from 'firebase';
/*
firebase.initializeApp({
  apiKey: 'AIzaSyCgNc_FLBAnpD_90joGLfphWunHY1OYjns',
  authDomain: 'nierika-7a8d3.firebaseapp.com',
  databaseURL: 'https://nierika-7a8d3.firebaseio.com',
  projectId: 'nierika-7a8d3',
  storageBucket: 'nierika-7a8d3.appspot.com',
  messagingSenderId: '795639442168'
});

const db = firebase.firestore();
export default db;
*/

const config = {
  apiKey: 'AIzaSyCgNc_FLBAnpD_90joGLfphWunHY1OYjns',
  authDomain: 'nierika-7a8d3.firebaseapp.com',
  databaseURL: 'https://nierika-7a8d3.firebaseio.com',
  projectId: 'nierika-7a8d3',
  storageBucket: 'nierika-7a8d3.appspot.com',
  messagingSenderId: '795639442168'
};

const init = firebase.initializeApp(config);
const db = firebase.firestore();

export { db, init };
