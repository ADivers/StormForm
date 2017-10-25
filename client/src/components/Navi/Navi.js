import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import { NavItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class Navi extends Component{

  state = {
    isLoggedIn: localStorage.getItem('token') !== null
  }

  logout(){
    localStorage.removeItem('token');

    this.setState({isLoggedIn: false});
  }

  

  render() {

    return(
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Storm Form</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        {/* <NavItem eventKey={1} href="/brainStorm">Brain Storm</NavItem> */}
        <NavItem eventKey={1} href="/">Create Event</NavItem> 
        <NavItem eventKey={2} href="/taskTracker">Task Tracker</NavItem> 
        <NavItem eventKey={3} href="/approval">Approval</NavItem>      
        <NavItem eventKey={4} href="/admin">Admin</NavItem>    
        { localStorage.getItem('token') === null &&
          <NavItem eventKey={5} href="/login">Login</NavItem>
        }
        { localStorage.getItem('token') !== null &&
          <NavItem eventKey={5} href="/" onClick={this.logout }>Logout</NavItem>

        }
                                 
        {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>admin</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown> */}
      </Nav>
      </Navbar>
    );
  }
}
       
export default Navi;