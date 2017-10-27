import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "../src/pages/";
import Login from "../src/pages/login";
import Register from "../src/pages/register";
// import API from "./utils/API";

import brainStorm from "./pages/brainStorm";
import taskTracker from "./pages/taskTracker";
import admin from "./pages/admin";
import approval from "./pages/approval";
import Navi from "./components/Navi";
import createEvent from "./pages/createEvent";
import appUser from "./components/appUser";
import InputForm from "./components/InputForm/InputForm.js";
// import CommentForm from "./components/CommentForm/CommentForm.js";
import Comments from "./components/Comments/Comments.js";


class App extends Component { 
  state = {
    appUser: {},
    isLoggedIn: false,
    redirect: false
  };

  // logout = () => {
  //   API.logout().then(res =>{
  //     console.log(res)

  //     if(res.data.logout){
  //       this.setState({logout: true})
  //       console.log(this.state);
  //     }
  //   })
  //   .catch(err => console.log(err));
  // }

  setLoginUser = user =>{
    console.log("setting up user");

    if(user){
      this.setState({isLoggedIn: true, appUser: user, redirect: true});
      localStorage.setItem('token', user);
      this.forceUpdate();
    }
      
    console.log(this.state);
  }

  render() {

      return (
        <Router>
          <div>
            <Navi isLoggedIn = {this.state.isLoggedIn} />
            <Switch>
              <Route exact path="/" render={() => {
                return (
                  (localStorage.getItem('token') !== null) ? (
                    <Redirect to="/home"/>
                ) : (
                  <Redirect to="/login"/>
                )
                )
              } } />
              <Route  exact path="/home" component={createEvent} />
              <Route  exact path="/brainStorm" component={InputForm} />
              <Route  exact path="/taskTracker" component={taskTracker} />
              <Route  exact path="/admin" component={admin} />
              <Route  exact path="/approval" component={approval} />
              <Route  exact path="/comment" component={Comments} />
              <Route  exact path="/login"
                component={() => <Login action={this.setLoginUser} />}
              />
              <Route  exact path="/register" component={Register} />
            </Switch>
            <appUser user={this.state.appUser} />
          </div>
        </Router>
      );
    }
  }
export default App;