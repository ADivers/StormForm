import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import {ErrorMSG} from '../components/msg';

class Login extends Component {
  state = {
    username: "",
    password: "",
    error_msg: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const {username , password} = this.state;

    API.authenticate({username, password})
      .then(res =>{
        console.log(res)

        if(res.data.isSuccessful){
          this.setState({username:'', password:'', error_msg: ""})
          console.log(this.state);
          localStorage.setItem('redirect','yes');
          this.props.action(res.data);
        }
        else{
          this.setState({username:'', password:'', error_msg: res.data.message})
        }
      })
      .catch(err => console.log(err));
  };

  render() {

    console.log("rending login");

    if(localStorage.getItem('redirect') === 'yes'){
      localStorage.setItem('redirect','no');
      return (<Redirect to='/home'/>);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <ErrorMSG msg={this.state.error_msg}/>
            <h2 className="page-header">Account Login</h2>
            <form method="post">
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
              </div>
              <button type="submit" className="btn btn-default" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;