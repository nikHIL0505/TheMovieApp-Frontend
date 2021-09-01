import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" fixed="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#33cccc", fontWeight: "600" }}>
          The Movie App
        </Navbar.Brand>
        <Nav className="f-left">
          <Nav.Link href="#home" style={{ color: "#fff", fontWeight: "600" }}>
            Latest
          </Nav.Link>
          <Nav.Link
            href="#features"
            style={{ color: "#fff", fontWeight: "600" }}
          >
            Popular
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            style={{ color: "#fff", fontWeight: "600" }}
          >
            Favroite
          </Nav.Link>
          <Nav.Link href="/login" style={{ color: "#fff", fontWeight: "600" }}>
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
