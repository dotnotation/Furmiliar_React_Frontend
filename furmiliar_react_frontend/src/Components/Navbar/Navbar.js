// import { requirePropFactory } from '@mui/material'
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap' 

export default function NavigationBar() {
  return (
    <div>  
        <Navbar className='nav-bar' bg="light" expand="lg" >
            <Container fluid>
                <Navbar.Brand  className='mb-5' href="/">        
                  <img 
                    id='logo-image'
                    alt="Dog with paw logo"
                    src={require("../../Assets/Logo-image.png")}
                    height="70"
                    className="d-inline-block align-self-center"
                  />
                </Navbar.Brand>
                <Navbar.Brand href="/">        
                  <img
                    alt="Dog with paw logo"
                    src={require("../../Assets/Logo-text.png")}
                    width="400"
                    className="d-inline-block align-items-center"
                  />
                </Navbar.Brand>
                <Nav className="mb-0 my-5 ms-auto">
                  <Nav.Link href="/pets">All Pets</Nav.Link>
                  <Nav.Link href="/pets/new">Register Your Pet</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
