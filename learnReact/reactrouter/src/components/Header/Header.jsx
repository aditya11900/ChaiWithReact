import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
     <ul>
        <li>
            <NavLink to="/" >Home</NavLink>
        </li>
        <li>
            <NavLink 
            to="/about">About</NavLink>
        </li>
        <li>
            <NavLink 
            to="/services">Services
            </NavLink>
        </li>
     </ul>
    </>
  )
}

export default Header