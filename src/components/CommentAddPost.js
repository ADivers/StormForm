import React, { Component } from 'react';
// import {database} from "../firebase-config"

class CommentAddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    author: '',
    title: ''
  };

  handleChange = (e) => {
    this.setState({
      author: e.target.value,
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.firebaseRef.push({
        author: e.target.value,
        title: e.target.value,
        upvote: 0,
    });

    this.setState({
      author: '' ,
      title: ''
    });
  }

  render() {
    return (
      <div className="AddPost">
        <input
          type="text"
          placeholder="Your name"
          onChange={ this.handleChange }
          value={ this.state.author }
        />

        <input type="text" 
        placeholder="Say something..." 
        onChange={ this.handleChange }
        value={ this.state.title }
        />
        <button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }
}


export default CommentAddPost;


// class CommentForm extends Component{
    
//       handleSubmit(e) {
//         e.preventDefault();
//         var author = this.refs.author.getDOMNode().value.trim();
//         var text = this.refs.text.getDOMNode().value.trim();
//         if (!text || !author) {
//           return;
//         }
//         this.props.onCommentSubmit({author: author, text: text});
//         this.refs.author.getDOMNode().value = '';
//         this.refs.text.getDOMNode().value = '';
//         return;
//       }
//       render () {
//         return(
//           <form className="commentForm" onSubmit={this.handleSubmit}>
//             <input type="text" placeholder="Your name" ref="author" />
//             <input type="text" placeholder="Say something..." ref="text" />
//             <input type="submit" value="Post" />
//           </form>
//         );
//       }
//     };





// import React, { Component } from 'react'
// class CommentList extends Component {
//     render() {
//       var commentNodes = this.props.data.map(function (comment) {
//         return (
//           <Comment author={comment.author}>
//             {comment.text}
//           </Comment>
//         );
//       });
//       return (
//         <div className="commentList">
//           {commentNodes}
//         </div>
//       );
//     }
//   };
  

//   export default CommentList;