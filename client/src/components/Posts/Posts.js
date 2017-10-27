import React from 'react';
import { Form, FormControl, FormGroup, Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class Posts extends React.Component {
  constructor(props){
    super(props);
  };

  render (props) {
    return (
          <Panel bsStyle="success"> 
            <ListGroup key={this.props.idea}>    
              <ListGroupItem>Idea: {this.props.idea}</ListGroupItem>
                <ListGroupItem><button><a href="/brainstorm">Brainstorm!</a></button></ListGroupItem>
            </ListGroup>
          </Panel>
    )
}

};


export default Posts;
