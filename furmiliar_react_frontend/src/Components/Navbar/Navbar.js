import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.css'

export default function NavigationBar() {
  return (
    <div>  
        <Navbar className='nav-bar' bg="light" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="/">Furmiliar</Navbar.Brand>
                {/* <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}> */}
                <Nav className="me-auto mb-2 mb-lg-0">
                <Nav.Link className="active fs-4" href="/toys">Toys</Nav.Link>
                <Nav.Link className="active fs-4" href="/pets">Pets</Nav.Link>
                <Nav.Link className="active fs-4" href="/pets/new">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
