import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import brainStorm from "./pages/brainStorm";
import taskTracker from "./pages/taskTracker";
import admin from "./pages/admin";
import approval from "./pages/approval";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
    <Nav />
      <Switch>
        <Route exact path="/" component={brainStorm} />
        <Route exact path="/taskTracker" component={taskTracker} />
        <Route exact path="/admin" component={admin} />
        <Route exact path="/login" component={login} />
        <Route exact path="/approval" component={approval} />
      </Switch>
    </div>
  </Router>;

export default App;

