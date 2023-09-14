import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import logo from "../assets/ch-logo.png";
import "../App.css";
import phone from "../assets/Phone.png";
import envelope from "../assets/Envelope.png";

export default function () {
  return (
    <div className="line">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="nav-text-space"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Navbar.Brand className="d-flex justify-between">
                <p className="name">CAROLINE HANA</p>
              </Navbar.Brand>
              <Navbar.Brand className="d-flex justify-between">
                <p className="name">| JUNIOR WEB DEVELOPER</p>
              </Navbar.Brand>
              <Navbar.Brand className="name">
                <a href="#projects"> | PROJECTS</a>
              </Navbar.Brand>
              <Navbar.Brand className="name">
                <a href="#skills"> | SKILLS</a>
              </Navbar.Brand>
            </Nav>
            <Nav>
              <div className="personal-info">
                <Navbar.Brand>
                  <p className="phone-info">
                    <img src={phone} />
                    (209)-505-4264
                  </p>
                </Navbar.Brand>
                <Navbar.Brand>
                  <p className="phone-info">
                    <img src={envelope} />
                    carolinehana28@gmail.com
                  </p>
                </Navbar.Brand>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
