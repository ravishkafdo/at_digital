import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLogo from "../../assets/atdigital.png";
import "./Navbar.css";

function BootstrapNav() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="basics" fixed="top">
        <Container className="nav-container">
          <Nav.Link 
            href="#home" 
            className={activePage === "home" ? "active-link" : ""}
            onClick={() => setActivePage("home")}
          >
            <img src={NavLogo} alt="Logo" />
          </Nav.Link>
          <Nav className="nav-links">
            <Nav.Link
              href="#services"
              className={activePage === "services" ? "active-link" : ""}
              onClick={() => setActivePage("services")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activePage === "about" ? "active-link" : ""}
              onClick={() => setActivePage("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activePage === "contact" ? "active-link" : ""}
              onClick={() => setActivePage("contact")}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="#careers"
              className={activePage === "careers" ? "active-link" : ""}
              onClick={() => setActivePage("careers")}
            >
              Careers
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BootstrapNav;
