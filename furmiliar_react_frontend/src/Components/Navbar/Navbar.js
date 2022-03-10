import { requirePropFactory } from '@mui/material'
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap' 

export default function NavigationBar() {
  return (
    <div>  
        <Navbar className='nav-bar' bg="light" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="/">        
                  <img
                    id='logo-image'
                    alt="Dog with paw logo"
                    src={require("../../Assets/Logo-image.png")}
                    height="60"
                    className="d-inline-block align-self-center"
                  />
                </Navbar.Brand>
                <Navbar.Brand href="/">        
                  <img
                    alt="Dog with paw logo"
                    src={require("../../Assets/Logo-text.png")}
                    height="80"
                    className="d-inline-block align-items-center"
                  />
                </Navbar.Brand>
                {/* <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}> */}
                <Nav className="me-auto mb-2 mb-xl-0">
                <Nav.Link href="/toys">Toys</Nav.Link>
                <Nav.Link href="/pets">Pets</Nav.Link>
                <Nav.Link href="/pets/new">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
