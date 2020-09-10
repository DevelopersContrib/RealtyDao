import {
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
  Navbar,
} from "react-bootstrap";
import Link from "next/link";

export default function navhome() {
  return (
    <React.Fragment>
      <Navbar bg='light' expand='lg' className='nav-home'>
        <div className='container'>
          <Navbar.Brand href='/'>
            <img
              src='https://cdn.vnoc.com/logos/logo-RealtyDAO-4.png'
              alt='Realty Dao'
              height='50'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <div className='mr-auto'></div>
            <Nav className='navHome'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='explorer'>TLD Explorer</Nav.Link>
              <Nav.Link href='/'>How it Works</Nav.Link>
		  <Nav.Link href='#contact'>Contact Us</Nav.Link>
              <Nav.Link href='login'>Log In</Nav.Link>
              <Nav.Link href='signup'>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
}
