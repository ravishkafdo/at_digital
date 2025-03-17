import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLogo from '../../assets/atdigital.png'
import './Navbar.css'


function BootstrapNav() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className='basics'>
        <Container>
          <Navbar.Brand href="#home"><img src={NavLogo}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</>
  );
}

export default BootstrapNav;