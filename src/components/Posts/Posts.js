// import React from 'react';

// const Posts = (props) => {

// // need function to bring firebase data to page

//     return (
//         <div>
//             <ul key={props.idea}>    
//                 <li>Idea: {props.idea}</li>
//                 <li>Location: {props.location}</li>
//                 <li>Date: {props.date}</li>
//                 <li>Budget: {props.budget}</li>
//             </ul>
//         </div>
//     )
// }

import React from 'react';

class Posts extends React.Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
    });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      date: post.date,
      location: post.location,      
      budget: post.budget,
      upvote: post.upvote,
    });
  }

  render() {
    let posts = this.props.posts;
    let _this = this;

    if (!posts) {
      return false;
    }

    return (
      <Posts>
        { Object.keys(posts).map(function(key) {
            return (
              <div key={key}>
                <div>Title: { posts[key].title }</div>
                <div>Date: { posts[key].date }</div>
                <div>Location: { posts[key].location }</div>
                <div>Budget: { posts[key].budget }</div>
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
            );
        })}
      </Posts>
    );
  }
}

export default Posts;
