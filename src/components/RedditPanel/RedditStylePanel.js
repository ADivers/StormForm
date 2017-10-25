import React from 'react';
// import * as firebase from "firebase";

// import config from './firebase-config';

class RedditStylePanel extends React.Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  state = {
    posts: [],
  };

  componentWillMount() {
    let postsRef = firebase.database().ref('posts');

    let _this = this;

    postsRef.on('value', function(snapshot) {
      _this.setState({
        posts: snapshot.val(),
      });
    });
  }

  render() {
    return (
      <RedditStylePanel>
        {this.props.children && React.cloneElement(this.props.children, {
          firebase: firebase.database(),
          posts: this.state.posts,
        })}
      </RedditStylePanel>
    );
  }
}

export default RedditStylePanel;
