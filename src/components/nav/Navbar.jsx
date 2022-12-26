import React, { useState, useContext } from 'react'

import {Nav, Brand, Menu, MenuLink,Hamburger} from "./Navbar.style"
import {GiHamburgerMenu} from "react-icons/gi"
import { LoginContext } from '../../contex/LoginContext'



const Navbar = () => {
  const {user,setUser} = useContext(LoginContext)
  
 

// Hamburger Menü için toogle işlemi tanımladım.

const [isOpen, setIsOpen] = useState(false)

// kullanıcı çıkış yaptığında oluşacak eventleri tanımladım.
const handleClick = ()=>{
  sessionStorage.clear()
  setUser("")
 
}


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

  {user ? (<MenuLink to="/" onClick ={handleClick}> Logout</MenuLink>) :(<MenuLink to="Login" > Login</MenuLink>) 
    }
  
</Menu>

    </Nav>
  )
}

export default Navbar