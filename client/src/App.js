import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/";
import Login from "../src/pages/login";
import Register from "../src/pages/register";
import {Redirect} from "react-router-dom";
// import API from "./utils/API";

import brainStorm from "./pages/brainStorm";
import taskTracker from "./pages/taskTracker";
import admin from "./pages/admin";
import approval from "./pages/approval";
import Navi from "./components/Navi";
import createEvent from "./pages/createEvent";
class App extends Component {
  // state = {
  //   logout: false
  // }

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

  render() {

    // if(this.state.logout){
    //   console.log("redirecting");
    //   return (
    //     <Redirect to={"/login"}/>
    //   );
    // }

    return (
      <div>
      <Router>
        <Navi />
          <Switch>
            <Route exact path="/" component={createEvent} />
            <Route exact path="/brainStorm" component={brainStorm} />
            <Route exact path="/taskTracker" component={taskTracker} />
            <Route exact path="/admin" component={admin} />
            <Route exact path="/approval" component={approval} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
      </Router>
      </div>
    )}
  }
export default App;