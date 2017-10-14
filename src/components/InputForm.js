import React from 'react';

class InputForm extends React.Component {
    constructor(){
        super();
        this.state = {
            idea: "this is the idea txt", // need this to be required
            location: "this is the location txt",
            date: "this is the date txt",  // make this a calander picker or text or both? weekend of xx?
            budget: 0
            
        }
    }
    update(e){
        this.setState({[e.target.name]: e.target.value})
    }    
    render() {
        return (
            <div>
                <h1>{this.state.idea}</h1>
                <input name="idea" placeholder="Idea Name" type="text"
                onChange={this.update.bind(this)}
                />
                <h1>{this.state.location}</h1>
                <input name="location" placeholder="Location(optional)" type="text"
                onChange={this.update.bind(this)}
                />
                <h1>{this.state.date}</h1>
                <input name="date" placeholder="Date(s)(optional)" type="text"
                onChange={this.update.bind(this)}
                />
                <h1>{this.state.budget}</h1>
                <input name="budget" placeholder="Budget(optional)" type="number"
                onChange={this.update.bind(this)}
                />

                <button>Submit</button>
            </div>
        )
    }
}


export default InputForm;
