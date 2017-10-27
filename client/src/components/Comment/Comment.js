import React from 'react';
import { Form, FormControl, FormGroup, Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class Comment extends React.Component {
  constructor(props){
    super(props);
  };

  render () {
    return (
            <Panel header={this.props.comment.author}>  
              <ListGroup>  
                <ul key={this.props.comment.idea}>    
                    <ListGroupItem>Date: {this.props.comment.date}</ListGroupItem>
                    <ListGroupItem>Location: {this.props.comment.location}</ListGroupItem>
                    <ListGroupItem>{this.props.comment.text}</ListGroupItem>
                    <ListGroupItem><button onClick={(e) => {
                      this.props.onUpvote(e, this.props.comment.id, this.props.comment.upvotes + 1)
                    }}>
                      Upvotes: {this.props.comment.upvotes}
                    </button>
                  </ListGroupItem>
                </ul>
              </ListGroup>
            </Panel>
    )
}

};


export default Comment;