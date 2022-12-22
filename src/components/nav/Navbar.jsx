import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, Brand} from "./Navbar.style"

const Navbar = () => {
  return (
    <Nav justify= "space-between" wrap= "wrap">
      <Brand to="/">
        <i>{"<Chef>"  } Recipe</i>
       </Brand> 

<div>
  <Link to="/" > Home</Link> 
  <Link to="about" > About</Link> 
  <Link to="register" > Register</Link> 
  <Link to="Logout" > Logout</Link> 
</div>

    </Nav>
  )
}

export default Navbar