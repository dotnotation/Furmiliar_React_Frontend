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
                    height="140"
                    className="d-inline-block align-items-center"
                  />
                </Navbar.Brand>
                {/* <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}> */}
                <Nav className="mb-0 my-5 ms-auto">
                  <Nav.Link href="/pets">All Pets</Nav.Link>
                  <Nav.Link href="/pets/new">Register Your Pet</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
// t - for classes that set margin-top or padding-top
// b - for classes that set margin-bottom or padding-bottom
// l - for classes that set margin-left or padding-left
// r - for classes that set margin-right or padding-right
// x - for classes that set both *-left and *-right
// y - for classes that set both *-top and *-bottom