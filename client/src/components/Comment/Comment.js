
import React from 'react';

class Comment extends React.Component {
  constructor(props){
    super(props);
  };

  upVote = () => {
    console.log(this.props.id);
    this.props.db.database().ref('allInfo').orderByKey().endAt(this.props.fireid.toString()).on("child_added", function(snapshot){
      console.log(snapshot)

     
    });
    
  }

  render (props) {
    return (
      <div>
          <ul key={this.props.idea}>    
              <li>author: {this.props.author}</li>
              <li>Date: {this.props.date}</li>
              <li>text: {this.props.date}</li>
              <button onClick={this.upVote}>Upvotes: {this.props.upvotes} </button>
          </ul>
      </div>
    )
}

};


export default Comment;