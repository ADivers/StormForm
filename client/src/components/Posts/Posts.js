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
              <button><a href="/brainstorm">Brainstorm!</a></button>
          </ul>
      </div>
    )
}

};


export default Posts;
