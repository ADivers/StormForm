import React, { Component } from 'react';
import firebase from "firebase";
// import * as firebase from "firebase";


// import Rebase from 're-base'

  // Initialize Firebase
const config = {
    apiKey: 'AIzaSyBWROo7CmdImTBe7BpiN3AnYSD-a5KyUyw',
    authDomain: 'storm-front.firebaseapp.com',
    databaseURL: 'https://storm-front.firebaseio.com',
    projectId: 'storm-front',
    storageBucket: 'storm-front.appspot.com',
    messagingSenderId: 785476182119
  };



//  const fire = firebase.initializeApp(config);



class Comments extends Component {
  // constructor() {
  //   super();

   
  //   // this.state = {
  //   //   CommentPost: [],
  //   // };

  // }
  
  




  componentWillMount() {

  
    let _this = this;
    fire.database().ref('CommentPost').push({
      author: 'Akandu',
      title: 'uhdsgfuihdf'
    });

    fire.database().ref('CommentPost').on('value', function(snapshot) {
      const commentsList = [];
      const comments = snapshot.val();

      for (var key in comments) {
        if (comments.hasOwnProperty(key)) {
          commentsList.push(comments[key]);
        }
      }

      _this.setState({
        commentposts: commentsList,
        loading: false
      });
     });
    }

  render() {

    return (
  
       <div className="Comments">
         { this.state.commentposts &&
           this.state.commentposts.map((comment, index) => {
             return (
              <div key={index}>
                <p>{comment.author}</p>
                <p>{comment.title}</p>
              </div>
             )
           })
         }
    
      </div>
    );
  }
}

// {this.props.children && React.cloneElement(this.props.children, {
//   // https://github.com/ReactTraining/react-router/blob/v3/examples/passing-props-to-children/app.js#L56-L58
//   firebase: firebase.database(),
//   CommentPost: this.state.post,
//   text: this.state.loading
// })}
export default Comments;