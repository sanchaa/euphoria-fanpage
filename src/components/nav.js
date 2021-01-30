import React from "react";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark" width="400">
       <div className="accountsB"><Button  variant="light">Sign Up</Button>
      <Button variant="dark">Log in</Button></div>
      <div className="bands/MainNavigation--middleBar"></div>
      <div className="logo-link"><NavLink to="/" className="home-link">
        <img src="Euphoria_(2019,_logo).png" width="300" alt="Euphoria" title="Euphoria" loading="lazy"/>
        </NavLink>
        </div>
  
      <Nav className="mr-auto">

        <section className="onlyfanpage">
          <h4>fanpage</h4>
        </section>

          <NavLink to="/about" className="nav-link">
          <b>About</b>
          </NavLink>

          <NavLink to="/studentids" className="nav-link"><b>StudentIDs</b></NavLink>

        <Nav.Link className="nav-link" href="#quiz"><b>Quiz</b></Nav.Link>
        <Nav.Link className="nav-link" href="#blog"><b>Blog</b></Nav.Link>
      </Nav>
  </Navbar>



  )};
export default MyNav;
