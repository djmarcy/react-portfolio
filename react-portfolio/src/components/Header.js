import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="position-fixed navbar">
      <Container>
        <Navbar.Brand className="fs-1">
          <h1>Dylan J. Marcy</h1>
        </Navbar.Brand>
        <Nav className="fs-5">
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#pupdates">Pupdates!</Nav.Link>
          <Nav.Link href="#contact-me">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
