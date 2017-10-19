import React, { Component } from 'react';
import logo from './logo.svg';
import CommentList from './components/CommentForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CommentForm />
      </div>
    );
  }
}

export default App;
