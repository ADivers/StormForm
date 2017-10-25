import React from 'react';
import CommentPost from './CommentPost';
import * as firebase from "firebase";

const config = {
    apiKey: 'AIzaSyBWROo7CmdImTBe7BpiN3AnYSD-a5KyUyw',
    authDomain: 'storm-front.firebaseapp.com',
    databaseURL: 'https://storm-front.firebaseio.com',
    projectId: 'storm-front',
    storageBucket: 'storm-front.appspot.com',
    messagingSenderId: 785476182119
  };

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                author: "",
                date: "TBD",
                upvotes: +1,
                allInfo: [],
        }
        this.update = this.update.bind(this);
        this.addIdea = this.addIdea.bind(this);

        this.app = firebase.initializeApp(config);
        this.db = this.app.database().ref().child('allInfo');
    }
    componentDidMount(){

        const previousPosts = this.state.allInfo;

        const {author, date, allInfo, upvotes} = this.state;
    // Data Snapshot
        this.db.on('child_added', snap => {
            console.log(snap);
            previousPosts.push({
                id: snap.key,
                author: snap.val().author,
                date: snap.val().date,
                              
                upvotes: snap.val().upvotes                
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

        // if (this.state.idea === "") {
        //     alert("Please include an idea before submitting.");
        // } else {
        
    const {author, date, allInfo, upvotes} = this.state;
    
            let commentPanel = {
                author,
                date,
                upvotes
            };
    
            const copy = allInfo.slice();
    
            copy.push(commentPanel);
            this.setState({
                allInfo: copy
            })

        this.db.push( this.state )
        

    // }
}

    render(props) { 
        // console.log(this.state.allInfo)
        return (
            <div>
                <form onSubmit={this.addIdea}>
                    <input name="author" 
                    placeholder="Name" 
                    type="text"
                    onChange={this.update}
                    />
                  
                    <input name="date" 
                    placeholder="Date(s)(optional)" 
                    type="text"
                    onChange={this.update}
                    />
                    
                    <button type="submit">Submit Idea
                    </button>
                </form> 

                {
                    this.state.allInfo.map((i) => {
                        return <CommentPost
                            key={i.key}
                           author={i.author}
                            date={i.date}
                            upvotes={i.upvotes}
                          />
                      })
                  } 
            </div>
        )
    }
}

export default CommentForm;