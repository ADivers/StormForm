import React from 'react';

class CommentPost extends React.Component {
  constructor(props){
    super(props);
  };

  render (props) {
    return (
      <div>
          <ul key={this.props.idea}>    
              <li>author: {this.props.author}</li>
              <li>Date: {this.props.date}</li>
              <li>Upvotes: {this.props.upvotes}</li>
          </ul>
      </div>
    )
}

};


export default CommentPost;