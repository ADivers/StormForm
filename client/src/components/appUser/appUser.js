import React, { Component } from "react";
import {Redirect} from "react-router-dom";

class appUser extends Component {
    state = {
        name: "",
        username: "",
        email: "",
        isLoggedIn: false
    };

    setLoginUser = user =>{
        this.setState(
            {
                name: user.name,
                username: user.username,
                email: user.email,
                isLoggedIn: true
            });
        console.log("inside appUser");
        console.log(this.state);
      }

    render() {

        this.setState(
            {
                name: this.props.user.name,
                username: this.props.user.username,
                email: this.props.user.email,
                isLoggedIn: this.props.user.isSuccessful
            });

        console.log(this.props);
        
        if(!this.state.isLoggedIn){
            console.log("redirecting");
            return (
                <Redirect to={"/login"}/>
            );
        }
    }

}

export default appUser;