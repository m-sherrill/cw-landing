import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap'
  

const Header = () => {
  return(
    <div className="header">
 <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="/"><Image fluid src="./assets/images/cwlogo.png" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Company" id="basic-nav-dropdown">
          <NavDropdown.Item href="/About">About Us</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Product and Services</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Policies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header