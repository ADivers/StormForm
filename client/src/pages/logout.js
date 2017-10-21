import React from 'react';
import {Redirect} from "react-router-dom";

const Logout = (props) =>{
    if(props.logout){
        return (
            <Redirect to={"/login"}/>
          );
    }
}