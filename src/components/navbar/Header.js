import "./header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">🍴Cookbook</Navbar.Brand>

        <Nav className="gap-3 header">
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
      </Container>
    </Navbar>
  );
}

export default Header;
