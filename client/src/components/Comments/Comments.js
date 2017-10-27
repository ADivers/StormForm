import React from 'react';
import Comment from '../Comment/Comment.js';
import CommentForm from '../CommentForm/CommentForm.js';
import * as firebase from "firebase";

import config from './firebaseConfig';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        author: "",
        date: "",
        text: "",
        upvotes: 0,
        commentsInfo: [],
    }
    this.upVote = this.upVote.bind(this);

    this.app = firebase.initializeApp(config);
    this.db = this.app.database().ref().child('commentsInfo');
    this.lol = this.app.database();
  };

  componentDidMount(){
    
    const {author, date, text, upvotes, commentsInfo} = this.state;

            this.app.database().ref().on('value', snap => {
                
                const snapVal = snap.val();

                const prevComments = Object.keys(snapVal.commentsInfo).map(key => {
                    return {
                        id: key,
                        ...snapVal.commentsInfo[key]
                    }
                }).sort((a, b) => a.upvotes < b.upvotes)

                this.setState({
                    commentsInfo: prevComments,
                    upvotes: this.state.upvotes,
                    author: this.state.author,
                    date: this.state.date,
                    text: this.state.text,
                });
            });
        }
        
  upVote = (e, id, newVal) => {
    e.preventDefault();
    console.log(this.state);

    this.lol.ref(`commentsInfo/${id}`).update({
        upvotes: newVal
    })

    const commentToUpdate = this.state.commentsInfo.find(c => c.id === id);
    commentToUpdate.upvotes = newVal;
    
    const newCommentsArray = [...this.state.commentsInfo];

    const indexToUpdate = newCommentsArray.indexOf(commentToUpdate);

    newCommentsArray[indexToUpdate] = commentToUpdate;

    this.setState({
        commentsInfo: newCommentsArray.sort((a, b) => a.upvotes < b.upvotes)
    });
    
  }

  render(props) {
      return (
        <div>
            <CommentForm onFormSubmit={(newComment) => {
                this.db.push(newComment);
            }}/>
            {this.state.commentsInfo.map((i) => {
                return <Comment 
                    key={this.state.id}
                    comment={i}
                    author={this.state.author}
                    date={this.state.date}
                    text={this.state.text}
                    onUpvote={this.upVote}
                />
            })}
        </div>
      )
  }
}

export default Comments;