import React from 'react';
import Comment from '../Comment/Comment';
import Comments from '../Comments/Comments.js';
import * as firebase from "firebase";

import config from '../Comments/firebaseConfig';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            author: "",
            date: "",
            text: "",
            upvotes: 0,
            allInfo: [],
        }
        this.update = this.update.bind(this);
        this.addIdea = this.addIdea.bind(this);
    }
    componentDidMount(){

        const previousPosts = this.state.allInfo;

        const { author, date, text, allInfo, upvotes} = this.state;
    }
    update(e){
        this.setState({[e.target.name]: e.target.value})
    }
    addIdea(e){
        e.preventDefault();
        
    const {author, date, text, allInfo, upvotes} = this.state;
    
            let ideaPanel = {
                author,
                date,
                text,
                upvotes
            };
    
            const copy = allInfo.slice();
    
            copy.push(ideaPanel);
            this.setState({
                allInfo: copy
            })
    }

    render(props) { 
        return (
            <div className="InputForm">
                <form onSubmit={this.addIdea}>
                    <input name="author" 
                    placeholder="Author Name" 
                    type="text"
                    onChange={this.update}
                    />
                
                    <input name="date" 
                    placeholder="Date(s)(optional)" 
                    type="text"
                    onChange={this.update}
                    />

                    <input name="text" 
                    placeholder="Comment" 
                    type="text"
                    onChange={this.update}
                    />
                    <button type="submit" onClick={(e) => {
                        e.stopPropagation();

                        this.props.onFormSubmit(this.state);
                    }}>Submit Idea
                    </button>
                </form> 
         </div>
     )
    
}

}


export default CommentForm;