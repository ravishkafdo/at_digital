import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLogo from "../../assets/atdigital.png";
import "./Navbar.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>

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
          <Link 
            to="/" 
            className={`navbar-brand ${activePage === "home" ? "active-link" : ""}`}
            onClick={() => {
              setActivePage("home");
              setExpanded(false);
            }}
          >
            <img src={NavLogo} alt="Logo" className="logo" />
          </Link>
          
          <Navbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")}
            className="hamburger-toggle"
          />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-links">
              <Link
                to="/maintenance"
                className={`nav-link ${activePage === "services" ? "active-link" : ""}`}
                onClick={() => {
                  setActivePage("services");
                  setExpanded(false);
                }}
              >
                Services
              </Link>
              <Link
                to="/maintenance"
                className={`nav-link ${activePage === "about" ? "active-link" : ""}`}
                onClick={() => {
                  setActivePage("about");
                  setExpanded(false);
                }}
              >
                About Us
              </Link>
              <Link
                to="/maintenance"
                className={`nav-link ${activePage === "contact" ? "active-link" : ""}`}
                onClick={() => {
                  setActivePage("contact");
                  setExpanded(false);
                }}
              >
                Contact Us
              </Link>
              <Link
                to="/maintenance"
                className={`nav-link ${activePage === "careers" ? "active-link" : ""}`}
                onClick={() => {
                  setActivePage("careers");
                  setExpanded(false);
                }}
              >
                Careers
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BootstrapNav;