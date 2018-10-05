import React, { Component } from 'react';
import { db } from './Credentials';
import { currenUser, picCurrenUser } from './Login';
import { Feed, Icon } from 'semantic-ui-react';
import Coments from './Coments';

const posting = textPosted => {
  //const userPost = document.getElementById('userPost');
  const postDate = new Date();

  db.collection('timeLine')
    .add({
      textPosted,
      date: postDate,
      user: currenUser,
      userPic: picCurrenUser
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
};

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textPosted: '',
      language: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    this.setState({ textPosted: this.state.value });
    posting(this.state.value);
    db.collection('timeLine')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(
            `${doc.id} => ${doc.data().textPosted} => ${doc.data().date} => ${
              doc.data().user
            } => ${doc.data().userPic}`
          );
        });
      });
  }

  render() {
    return (
      <div className="main">
        <section className="timeLine">
          <div className="card text-center">
            <div className="card-header">
              <img src={picCurrenUser} alt={currenUser} className="profile" />
              <h3> {currenUser}</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <input
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
              <button onClick={this.handleClick.bind(this)}>publish</button>
              <p className="card-text" />
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
    );
  }
}

/*
  render() {
    return (
      <Comment.Group>
        <Form reply>
          <Form.TextArea />
          <input id="userPost" />
          <Button
            content="Publicar"
            labelPosition="left"
            icon="edit"
            primary
            onClick={posting(userPost)}
          />
        </Form>
      </Comment.Group>
    );
  }
}
*/
export default Publish;
