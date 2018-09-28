//Crear componente post con bootstrap
import React, { Component } from 'react';
import firebase from 'firebase';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0
    };
    //this.handleUpload = this.handleUpload.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Aquí irá el post</h2>
        <progress value={this.state.uploadValue} max="100">
          {this.state.uploadValue} %
        </progress>
        <br />
        <input type="file" onChange={this.props.onUpload} />
        <br />
        <img width="320" src={this.state.picture} alt="" />
      </div>
    );
  }
}

export default Post;
