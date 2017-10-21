import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "../src/components/pages/";
import Login from "../src/components/pages/login";
import Register from "../src/components/pages/register";
import {Redirect} from "react-router-dom";
import API from "./utils/API";


class App extends Component {
  state = {
    logout: false
  }

  logout = () => {
    API.logout().then(res =>{
      console.log(res)

      if(res.data.logout){
        this.setState({logout: true})
        console.log(this.state);
      }
    })
    .catch(err => console.log(err));
  }

  render() {

    if(this.state.logout){
      console.log("redirecting");
      return (
        <Redirect to={"/login"}/>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <Switch>
            <a onClick={this.logout}>Logout</a>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
