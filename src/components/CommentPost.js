import React, { Component } from 'react';

class CommentPosts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      author: post.author,
      title: post.title,
      upvote: post.upvote + 1
    
    });
  }

  render() {
    let posts = this.props.posts;
    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
            return (
              <div key={key}>
                <div>Title: { posts[key].title }</div>
                <div>Upvotes: { posts[key].upvote }</div>
                
                <div>
                  <button 
                    onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Upvote
                  </button>
                  
                </div>
              </div>
          )})
        }
      </div>
    );
}
}

export default CommentPosts;