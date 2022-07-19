import React, { useState } from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
  

const Header = () => {
  return(
    <div id="header">

<Navbar
  alignLinks="right"
  brand={<a className="brand-logo" id="navbar" href="#"><img className="responsive-img" src="./assets/images/cwlogo.png" /></a>}
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

  <NavItem className="black-text" href="/">
  Order Online
  </NavItem>
  <NavItem className="black-text" href="/">
  Order Online
  </NavItem>
  <NavItem className="black-text" href="/">
  Order Online
  </NavItem>
  <NavItem className="black-text" href="/">
  Order Online
  </NavItem>
</Navbar>



    </div>
  )
}

export default Header