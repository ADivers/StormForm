import React from 'react';

class Comment extends React.Component {
  constructor(props){
    super(props);
  };

  render () {
    return (
      <div>
          <ul key={this.props.comment.idea}>    
              <li>author: {this.props.comment.author}</li>
              <li>Date: {this.props.comment.date}</li>
              <li>text: {this.props.comment.text}</li>
              <button onClick={(e) => {
                this.props.onUpvote(e, this.props.comment.id, this.props.comment.upvotes + 1)
              }}>
                Upvotes: {this.props.comment.upvotes}
              </button>
          </ul>
      </div>
    )
}

};


export default Comment;