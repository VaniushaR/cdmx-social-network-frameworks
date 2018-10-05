//Crear componente post con bootstrap
import React, { Component } from 'react';
/*
import firebase from 'firebase';
import { Feed, Icon } from 'semantic-ui-react';
//import Login from './Login';
import Coments from './Coments';
import { db } from './Credentials';

let datePost;
let userPosting;
let postPublished;
let userPicPost;

const Post = () => {
  return db
    .collection('timeLine')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        postPublished = doc.data().textPosted;
        console.log(postPublished);
        userPosting = doc.data().user;
        userPicPost = doc.data().userPic;
        datePost = doc.data().date;
        //return postPublished, userPicPost, userPosting, datePost;
      });
    });
};

export { Post };
/*
<div className="main">
  <section className="timeLine">
    <div className="card text-center">
      <div className="card-header">
        <img
          className="profile"
          src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
        />
        <h3> user</h3>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <select />
        <p className="card-text"> {postPublished}</p>
        <a href="#" className="btn btn-Success">
          Go somewhere
        </a>
      </div>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />4 Likes
              </Feed.Like>
              <input placeholder="¿A qué lengua pertenece?" id="Language" />
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
      <div className="card-footer text-muted"> </div>
      <Coments />
    </div>
  </section>
</div>;
//import { Select } from 'semantic-ui-react'

//import { countryOptions } from '../common'
// [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...{}]

//export default SelectExample

/*
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

console.log(
  `${doc.id} => ${doc.data().textPosted} => ${doc.data().date} => ${
    doc.data().user
  } => ${doc.data().userPic}`
)



  render() {
    return (
      <section className="container">
        {this.state.posts.forEach(post => (
          <div className="main">
            <section className="timeLine">
              <div className="card text-center">
                <div className="card-header">
                  <img
                    className="profile"
                    src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                  />
                  <h3> user</h3>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <select />
                  <p className="card-text">{doc.data().textPosted}</p>
                  <a href="#" className="btn btn-Success">
                    Go somewhere
                  </a>
                </div>
                <Feed>
                  <Feed.Event>
                    <Feed.Content>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name="like" />4 Likes
                        </Feed.Like>
                        <input
                          placeholder="¿A qué lengua pertenece?"
                          id="Language"
                        />
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
                <div className="card-footer text-muted"> </div>
                <Coments />
              </div>
            </section>
          </div>
        ))}
      </section>
    );
  }
}
*/
