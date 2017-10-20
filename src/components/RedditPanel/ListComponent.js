import React from 'react';

const ListComponent = (props) => {
        return <div>
            <ul key={props.idea}>    
                <li>{props.idea}</li>
                <li>{props.location}</li>
                <li>{props.date}</li>
                <li>{props.budget}</li>
            </ul>
        </div>
}

export default ListComponent;