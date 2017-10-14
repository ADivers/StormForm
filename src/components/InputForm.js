import React, { Component } from 'react';

class InputForm extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: "this is the state txt"
        }
    }
    update(e){
        this.setState({txt: e.target.value})
    }    
    render() {
        return (
            <div>
                <h1>{this.state.txt}</h1>
                <input ref="name" placeholder="Idea Name" type="text"
                onChange={this.update.bind(this)}/>
                <input ref="location" placeholder="Location(optional)" type="text"/>
                <input ref="date" placeholder="Date(s)(optional)" type="text"/>
                <input ref="budget" placeholder="Budget(optional)" type="text"/>
                <button>Submit</button>
            </div>
        )
    }
}


export default InputForm;
