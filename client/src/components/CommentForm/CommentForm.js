import React from 'react';
import Comment from '../Comment/Comment';
import Comments from '../Comments/Comments.js';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
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
            <Form inline className="InputForm">
                <form onSubmit={this.addIdea}>
                    <FormControl name="author" 
                    placeholder="Author Name" 
                    type="text"
                    onChange={this.update}
                    />
                
                    <FormControl name="date" 
                    placeholder="Date" 
                    type="text"
                    onChange={this.update}
                    />
                    <FormControl name="location" 
                    placeholder="Location" 
                    type="text"
                    onChange={this.update}
                    />
                    <FormControl name="text" 
                    placeholder="Comment" 
                    type="text"
                    onChange={this.update}
                    />
                    <Button type="submit" onClick={(e) => {
                        e.stopPropagation();

                        this.props.onFormSubmit(this.state);
                    }}>Submit Idea
                    </Button>
                </form> 
         </Form>
     )
    
}

}


export default CommentForm;