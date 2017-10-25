import React from 'react';
import Posts from '../Posts/Posts';
import * as firebase from "firebase";

import config from './firebase-config';

class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idea: "",
            location: "TBD",
            date: "TBD",
            budget: "TBD",
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

        const {idea, location, date, budget, allInfo, upvotes} = this.state;
    // Data Snapshot
        this.db.on('child_added', snap => {
            console.log(snap);
            previousPosts.push({
                id: snap.key,
                idea: snap.val().idea,
                location: snap.val().location,
                date: snap.val().date,
                budget: snap.val().budget,                
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
        
    const {idea, location, date, budget, allInfo, upvotes} = this.state;
    
            let ideaPanel = {
                idea,
                location,
                date,
                budget, 
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
                    placeholder="Idea Name" 
                    type="text"
                    onChange={this.update}
                    />
                    <input name="location" 
                    placeholder="Location(optional)" 
                    type="text"
                    onChange={this.update}
                    />
                    <input name="date" 
                    placeholder="Date(s)(optional)" 
                    type="text"
                    onChange={this.update}
                    />
                    <input name="budget" 
                    placeholder="Budget(optional)" 
                    type="text"
                    onChange={this.update}
                    />
                    <button type="submit">Submit Idea
                    </button>
                </form> 

                {
                    this.state.allInfo.map((i) => {
                        return <Posts
                            key={i.key}
                            idea={i.idea}
                            date={i.date}
                            location={i.location}
                            budget={i.budget}
                            upvotes={i.upvotes}
                          />
                      })
                  } 
            </div>
        )
    }
}

export default InputForm;