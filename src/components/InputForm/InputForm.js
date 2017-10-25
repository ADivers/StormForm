import React from 'react';
import Posts from '../Posts/Posts';

class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                idea: "",
                location: "TBD",
                date: "TBD",
                budget: "TBD",
                allInfo: [],
                upvotes: 0,
        }
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({[e.target.name]: e.target.value})
    }
    addIdea(e){
        e.preventDefault();

        if (this.state.idea === "") {
            alert("Please include an idea before submitting.");
        } else {

        const {idea, location, date, budget, allInfo, upvotes} = this.state;

        let ideaPanel = {
            idea,
            location,
            date,
            budget,
            upvotes, 
        };

        const copy = allInfo.slice();

        copy.push(ideaPanel);
        this.setState({
            allInfo: copy
        });

    }
}

    render(props) { 
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.addIdea.bind(this)}>
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