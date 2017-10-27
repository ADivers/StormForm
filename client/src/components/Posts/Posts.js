import React from 'react';

class Posts extends React.Component {
  constructor(props){
    super(props);
  };

  render (props) {
    return (
      <div>
          <ul key={this.props.idea}>    
              <li>Idea: {this.props.idea}</li>
              <button><a href="/comment">Brainstorm!</a></button>
              {/* <li>Location: {this.props.location}</li>
              <li>Date: {this.props.date}</li>
              <li>Budget: {this.props.budget}</li>
              <li>Upvotes: {this.props.upvotes}</li> */}
          </ul>
      </div>
    )
}

};


export default Posts;
