import React from "react";

const Error = (props) => {

    return (
     <div className="alert alert-danger" style={((props.msg === "") ? {display: 'none'} : {display: 'block'} )} >{props.msg}</div>

    );
    
}

export default Error;