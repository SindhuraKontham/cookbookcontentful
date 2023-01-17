import "./header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">🍴Cookbook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-3">
            <NavLink to="/soup" className="text-decoration-none text-dark ">
              Soup
            </NavLink>
            <NavLink to="/starter" className="text-decoration-none text-dark  ">
              Starter
            </NavLink>
            <NavLink to="/main" className="text-decoration-none text-dark  ">
              Main
            </NavLink>
            <NavLink to="/salad" className="text-decoration-none text-dark  ">
              Salad
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
