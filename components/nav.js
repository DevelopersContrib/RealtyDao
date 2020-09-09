import {
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
  Navbar,
} from "react-bootstrap";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

export default function nav() {
  return (
    <React.Fragment>
      <style jsx global>{`
        body {
          padding-top: 71px;
        }
        @media (min-width: 1400px) {
          .container {
            max-width: 1340px;
          }
        }
      `}</style>
      <Navbar
        bg='light'
        expand='lg'
        variant='light'
        className='navbar-custom-main fixed-top'
      >
        <div className='container'>
          <Navbar.Brand href='/'>
            <img
              className='img-logo'
              src='https://cdn.vnoc.com/logos/logo-RealtyDAO-4.png'
              alt='RealtyDAO'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <ActiveLink activeClassName='active' href='/dashboard'>
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
              </ActiveLink>
              <ActiveLink activeClassName='active' href='/domains'>
                <Nav.Link href='/domains'>Manage TLD</Nav.Link>
              </ActiveLink>
              <ActiveLink activeClassName='active' href='/tld'>
                <Nav.Link href='/tld'>TLD Reports</Nav.Link>
              </ActiveLink>
              <ActiveLink activeClassName='active' href='/send'>
                <Nav.Link href='/send'>Send Funds</Nav.Link>
              </ActiveLink>
              <ActiveLink activeClassName='active' href='/marketplace'>
                <Nav.Link href='/marketplace'>Marketplace</Nav.Link>
              </ActiveLink>
            </Nav>
            <Nav className='ml-auto'>
              <NavDropdown title='JC' id='basic-nav-dropdown'>
                <Link href='/settings'>
                  <NavDropdown.Item href='/settings'>
                    <i className='fas fa-cog mr-2'></i>
                    Settings
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#'>
                  <i className='fas fa-sign-out-alt mr-2'></i>Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
}
