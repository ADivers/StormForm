import React, { Component } from 'react'
/**@jsx React.DOM*/

var converter = new Showdown.converter();


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

class CommentList extends Component {
  render() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
};



class Comment extends Component {
  render() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
};

// React.renderComponent(
//   <CommentBox url="https://amp-comments.firebaseio.com/comments.json" pollInterval={16000} />,
//   document.getElementById('main')
// );

export default 