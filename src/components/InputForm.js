import React from 'react';

class InputForm extends React.Component {
    constructor(){
        super();
        this.state = {
            idea: "this is the idea txt", // need this to be required
            location: "this is the location txt",
            date: "this is the date txt",  // make this a calander picker or text or both? weekend of xx?
            budget: "this is the budget txt",
            ideaPanel: [],
            
        }
    }
    update(e){
        this.setState({[e.target.name]: e.target.value})
    }
    addIdea(e){
        e.preventDefault();
        let idea = this.state.idea;
        let location = this.state.location;
        let date = this.state.date;
        let budget = this.state.budget;
        // let ideaPanel = [idea, location, date, budget];

        this.setState({
            ideaPanel: this.state.ideaPanel.concat({idea, location, date, budget})
        })
     
        console.log(this.state.ideaPanel);
        console.log(this.state);
        console.log(this.state.idea);
        console.log(this.state.location);
        console.log(this.state.date);        
        console.log(this.state.budget);
    }
    render() { 
        return (
            <div>
                <form onSubmit={this.addIdea.bind(this)}>
                    <input name="idea" 
                    placeholder="Idea Name" 
                    type="text"
                    onChange={this.update.bind(this)}
                    />
                    <input name="location" 
                    placeholder="Location(optional)" 
                    type="text"
                    onChange={this.update.bind(this)}
                    />
                    <input name="date" 
                    placeholder="Date(s)(optional)" 
                    type="text"
                    onChange={this.update.bind(this)}
                    />
                    <input name="budget" 
                    placeholder="Budget(optional)" 
                    type="text"
                    onChange={this.update.bind(this)}
                    />
                    <button type="submit">Submit Idea
                    </button>
                </form>
                <h1>{this.state.idea}</h1>
                <h1>{this.state.location}</h1>
                <h1>{this.state.date}</h1>
                <h1>{this.state.budget}</h1>
                <h1>{this.state.ideaPanel}</h1>
            </div>
        )
    }
}


export default InputForm;
