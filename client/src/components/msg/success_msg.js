import React from "react";

const SuccessMSG = (props) => {
    return (
        <div className="alert alert-success" style={((props.msg === "") ? {display: 'none'} : {display: 'block'} )} >{props.msg}</div>
    );

};

export default SuccessMSG;