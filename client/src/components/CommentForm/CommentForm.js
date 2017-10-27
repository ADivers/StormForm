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
            date: "TBD",
            text: "",
            upvotes: 0,
            allInfo: [],
        }
        this.update = this.update.bind(this);
        this.addIdea = this.addIdea.bind(this);

        this.app = firebase.initializeApp(config);
        this.db = this.app.database().ref().child('allInfo');
    }
    componentDidMount(){

        const previousPosts = this.state.allInfo;

        const { author, date, text, allInfo, upvotes} = this.state;
    // Data Snapshot
        this.db.on('child_added', snap => {
            console.log(snap.key);
            previousPosts.push({
                id: snap.key,
                auhor: snap.val().author,
                date: snap.val().date,
                text: snap.val().text,               
                upvotes: snap.val().upvotes,                
            })
            this.setState({
                allInfo: previousPosts
            });    
        });
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

        this.db.push( this.state )

}

    render(props) { 
        return (
            <div className="InputForm">
                <form onSubmit={this.addIdea}>
                    <input name="idea" 
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
                    <button type="submit">Submit Idea
                    </button>
                </form> 

                {/* {
                    this.state.allInfo.map((i) => {
                        return <Comments
                             key={i.key}
                             fireid={i.id}
                             author={i.author}
                             date={i.date}
                             text={i.text}
                             upvotes={i.upvotes}
                            db={this.app}
                          />
                      })
                    } */}
         </div>
     )
    
}

}


export default CommentForm;