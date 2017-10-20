import React from 'react';

const ListComponent = ({idea, location, date, budget}) => {

    return (
        <div>
            <p>{idea}</p>
            <p>{location}</p>
            <p>{date}</p>
            <p>{budget}</p>
        </div>
    )
}

export default ListComponent;