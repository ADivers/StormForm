import React from 'react';

class Comment extends React.Component {
  constructor(props){
    super(props);
  };

  render () {
    return (
      <div>
          <ul key={this.props.comment.idea}>    
              <li>Author: {this.props.comment.author}</li>
              <li>Dates: {this.props.comment.date}</li>
              <li>Location: {this.props.comment.location}</li>
              <li>Text: {this.props.comment.text}</li>
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