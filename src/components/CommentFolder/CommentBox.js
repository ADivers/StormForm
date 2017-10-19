
import React, { Component } from 'react'

class CommentBox extends Component  {
    loadCommentsFromServer() {
      
      var url = 'https://storm-front.firebaseio.com/'
  
      $.ajax({
        url: url,
        dataType: 'json',
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
    handleCommentSubmit(comment) {
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
    getInitialState() {
      return {data: []};
    }
    componentDidMount() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }
    render() {
      return (
        <div className="commentBox">
          <h3>Comments</h3>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  };
  
  export default CommentBox;