import React, { useState } from 'react'
import { Navbar, NavItem, Icon, Dropdown, Divider, Container } from 'react-materialize'
  

const Header = () => {
  return(
    <div id="header">

<Navbar
  alignLinks="right"
  brand={<a className="brand-logo" id="navbar" href="/"><img className="responsive-img" src="./assets/images/cwlogo.png" /></a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>

  <NavItem className="black-text" href="/order">
  Order Online
  </NavItem>
  
  <Dropdown
  className="black-text"
    id="Dropdown_14"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<a href="#!">Company{' '}<Icon right>arrow_drop_down</Icon></a>}
  >
    <a href="/about">
      About Us
    </a>
    <a href="/products">
      Products
    </a>
    <a href="/policy">
      Policies
    </a>
  </Dropdown>
  <NavItem className="black-text" href="/contact">
  Contact
  </NavItem>
</Navbar>



    </div>
  )
}

export default Header