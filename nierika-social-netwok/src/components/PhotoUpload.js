import React, { Component } from 'react';
import firebase from 'firebase';

class PhotoUpload extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0
    };
  }

  render() {
    return (
      <div>
        <progress value={this.state.uploadValue} max="100" />
        <br />
        <input type="file" onChange={this.props.onUpload} />
        <img width="320" src={this.state.pic} alt="post img" />
        <Post />
      </div>
    );
  }
}

handleUpload = event => {
  const file = event.target.files[0];
  const storageRef = firebase.storage().ref(`/Fotos/${file.name}`);
  const task = storageRef.put(file);
  task.on(
    'state_changed',
    snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      });
    },
    error => {
      console.log(error.message);
    },
    () => {
      this.setState({
        uploadValue: 100,
        pic: task.snapshot.downloadURL
      });
    }
  );
};

<PhotoUpload onUpload={this.handleUpload} />;
{
  this.state.pic.map(picture => (
    <div>
      <img src={picture.image} />
      <br />
      <img src={picture.photoURL} alt={picture.displayName} />
      <br />
      <span>{picture.displayName}</span>
    </div>
  ));
}

export default PhotoUpload;
