import React, { useState } from 'react'

import {Nav, Brand, Menu, MenuLink,Hamburger} from "./Navbar.style"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {

// Hamburger Menü için toogle işlemi tanımladım.

const [isOpen, setIsOpen] = useState(false)


  return (
    <Nav justify= "space-between" wrap= "wrap">
      <Brand to="/">
        <i>{"<Chef>"  } Recipe</i>
       </Brand> 


<Hamburger onClick = {()=>setIsOpen(!isOpen)}>
<GiHamburgerMenu />
</Hamburger>


<Menu isOpen ={isOpen} onClick ={()=>setIsOpen(false)}>
  <MenuLink to="/" > Home</MenuLink> 
  <MenuLink to="about" > About</MenuLink> 
  <MenuLink to="register" > Register</MenuLink> 
  {/*Kullanıcı bilgigini localden temizledim.*/}
  <MenuLink to="Logout" onClick={()=>sessionStorage.clear()}> Logout</MenuLink> 
</Menu>

    </Nav>
  )
}

export default Navbar