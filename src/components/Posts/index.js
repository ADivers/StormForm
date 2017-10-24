import React from 'react';

const Posts = (props) => {

// need function to bring firebase data to page

    return (
        <div>
            <ul key={props.idea}>    
                <li>Idea: {props.idea}</li>
                <li>Location: {props.location}</li>
                <li>Date: {props.date}</li>
                <li>Budget: {props.budget}</li>
            </ul>
        </div>
    )
}

export default Posts;