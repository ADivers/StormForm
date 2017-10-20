import React from 'react';
import InputForm from "./InputForm";
import ListComponent from "./ListComponent";

class RedditStylePanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                idea: "",
                location: "",
                date: "",
                budget: "",
                allInfo: [],
        }
        this.update = this.update.bind(this)
    }
    update = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
    }
    addIdea = (e) => {
        e.preventDefault();
        console.log("addIdea")
        if (this.state.idea === "") {
            alert("Please include an idea before submitting.");
        } else {

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
        console.log(copy)
    }
}

    render() {
        return (
            <div>
                <InputForm 
                    idea={this.state.idea}
                    location={this.state.location}
                    date={this.state.date}
                    budget={this.state.budget}
                    allInfo={this.state.allInfo}
                    update={this.update}
                    addIdea={this.addIdea}   
                />
                {
                    this.state.allInfo.map(i => {
                        return <ListComponent
                                    key={i.idea}
                                    idea={i.idea}
                                    location={i.location}
                                    date={i.date}
                                    budget={i.budget}
                                    allInfo={i.allInfo}
                            />
                        }
                    )
                } 
            </div>    
        )
    }
}

export default RedditStylePanel;