import React from 'react';

const ListComponent = (props) => {
        return <div>
            <ul key={props.idea}>    
                <li>Idea: {props.idea}</li>
                <li>Location: {props.location}</li>
                <li>Date: {props.date}</li>
                <li>Budget: {props.budget}</li>
            </ul>
        </div>
}

export default ListComponent;