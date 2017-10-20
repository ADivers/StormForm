import React from 'react';

const ListComponent = (props) => {
        <div>
            {props.allInfo.map(i =>
               <ul key={i.idea}>    
                    <li>{i.idea}</li>
                    <li>{i.location}</li>
                    <li>{i.date}</li>
                    <li>{i.budget}</li>
                </ul>
            )}
        </div>
}

export default ListComponent;