import React from 'react';
import InputForm from "../components/InputForm";
import ListComponent from "../components/ListComponent";

class RedditStylePanel extends React.Component {

    render() {
        return ( 
        <div>
            <InputForm />
            {
                this.state.allInfo.map((i) => {
                return  <ListComponent
                            key={i.idea}
                            idea={i.idea}
                            date={i.date}
                            location={i.location}
                            budget={i.location}
                    />
                })
            }
        </div>
        )
    }
}

export default RedditStylePanel;