import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import {Error} from '../components/msg';

class Register extends Component {

  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password2:"",
    hasSuccess: false,
    error: "",
    hasErrors: false,
    redirect : false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();

    const {name, username , email, password, password2} = this.state;

    API.validate({name, username , email, password, password2})
      .then(res =>{
        console.log(res);
          if(res.data.isSuccessful){

            this.setState(
              {
                name:"", 
                username:"", 
                email:"", 
                password:"", 
                password2:"", 
                hasErrors: false,
                redirect: true
              });
          }              
          else {
            this.setState(
              {
                error: res.data.errors, 
                hasErrors:res.data.hasErrors
              });
          }
            

          console.log(this.state);
        }
      )
      .catch(err => console.log(err));
  };

  render() {
    if(this.state.redirect){
      return (
        <Redirect to={"/login"}/>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {this.state.hasErrors &&
                this.state.error.map((e) => {
                  return <Error msg={e.msg} key={e.param}/>
                })
            }
            <h2 className="page-header">Register</h2>
              <form method="post" action="/users/register">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" 
                        className="form-control" 
                        placeholder="Name" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        name="password2" 
                        value={this.state.password2} 
                        onChange={this.handleInputChange}/>
                </div>
                <button type="submit" 
                        className="btn btn-default" 
                        onClick={this.handleFormSubmit}>
                  Submit
                </button>
              </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Register;