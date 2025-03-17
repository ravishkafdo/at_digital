import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLogo from "../../assets/atdigital.png";
import "./Navbar.css";

function BootstrapNav() {
  const [activePage, setActivePage] = useState("home");
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar 
        bg="primary" 
        data-bs-theme="dark" 
        className="basics" 
        fixed="top"
        expand="md" 
        expanded={expanded}
      >
        <Container className="nav-container">
          <Nav.Link 
            href="#home" 
            className={`navbar-brand ${activePage === "home" ? "active-link" : ""}`}
            onClick={() => setActivePage("home")}
          >
            <img src={NavLogo} alt="Logo" className="logo" />
          </Nav.Link>
          
          <Navbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")}
            className="hamburger-toggle"
          />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-links">
              <Nav.Link
                href="#services"
                className={activePage === "services" ? "active-link" : ""}
                onClick={() => {
                  setActivePage("services");
                  setExpanded(false);
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={activePage === "about" ? "active-link" : ""}
                onClick={() => {
                  setActivePage("about");
                  setExpanded(false);
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={activePage === "contact" ? "active-link" : ""}
                onClick={() => {
                  setActivePage("contact");
                  setExpanded(false);
                }}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#careers"
                className={activePage === "careers" ? "active-link" : ""}
                onClick={() => {
                  setActivePage("careers");
                  setExpanded(false);
                }}
              >
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BootstrapNav;