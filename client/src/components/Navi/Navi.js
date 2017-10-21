import React from "react";
import { NavItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

// const NavDropdownExample = React.createClass({
//   handleSelect(eventKey) {
//     event.preventDefault();
//     alert(`selected ${eventKey}`);
//   },

  const Navi = () =>
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Storm Form</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        {/* <NavItem eventKey={1} href="/brainStorm">Brain Storm</NavItem> */}
        <NavItem eventKey={2} href="/">Create Event</NavItem> 
        <NavItem eventKey={2} href="/taskTracker">Task Tracker</NavItem> 
        <NavItem eventKey={2} href="/approval">Approval</NavItem>      
        <NavItem eventKey={2} href="/admin">Admin</NavItem>    
        <NavItem eventKey={2} href="/login">Login</NavItem>                           
        {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>admin</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown> */}
      </Nav>
      </Navbar>;
    
export default Navi;
