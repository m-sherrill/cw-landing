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
        <Nav.Link href="/">Order Online</Nav.Link>
        
        <NavDropdown title="Company" id="basic-nav-dropdown">
          <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
          <NavDropdown.Item href="#products">Product and Services</NavDropdown.Item>
          <NavDropdown.Item href="/Policy">Policies</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header