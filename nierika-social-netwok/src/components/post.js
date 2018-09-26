//Crear componente post con bootstrap
import React, { Component } from 'react';
import firebase from 'firebase';
import PhotoUpload from './PhotoUpload';

class Post extends Component {
  render() {
    return (
      <div>
        <h2>Aquí irá el post</h2>
        <PhotoUpload />
      </div>
    );
  }
}

export default Post;
