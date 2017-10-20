import React from 'react';

const InputForm = (props) =>
    <div>
        <form onSubmit={props.addIdea}>
            <input name="idea" 
            placeholder="Idea Name" 
            type="text"
            onChange={props.update}
            />
            <input name="location" 
            placeholder="Location(optional)" 
            type="text"
            onChange={props.update}
            />
            <input name="date" 
            placeholder="Date(s)(optional)" 
            type="text"
            onChange={props.update}
            />
            <input name="budget" 
            placeholder="Budget(optional)" 
            type="text"
            onChange={props.update}
            />
            <button type="submit">Submit Idea
            </button>
        </form> 
    </div>

export default InputForm;