import React from 'react';

class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                idea: "this is the idea txt", // need this to be required
                location: "this is the location txt",
                date: "this is the date txt",
                budget: "this is the budget txt",
                allInfo: [],
        }
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({[e.target.name]: e.target.value})
    }
    addIdea(e){
        e.preventDefault();

        const {idea, location, date, budget, allInfo} = this.state;

        let ideaPanel = {
            idea,
            location,
            date,
            budget, 
        };

        const copy = allInfo.slice();

        copy.push(ideaPanel);
        this.setState({
            allInfo: copy
        })
    }
    render() { 
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
                        <ListComponent
                            name={i.name}
                            date={i.date}
                            location={i.location}
                            budget={i.location}
                        />
                    })
// map over array into ListComponent
                } 
                <h1>{this.state.idea}</h1>
                <h1>{this.state.location}</h1>
                <h1>{this.state.date}</h1>
                <h1>{this.state.budget}</h1>
                <h1>{this.state.allInfo.length}</h1>
            </div>
        )
    }
}


export default InputForm;
