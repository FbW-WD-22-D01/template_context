import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li> <NavLink to="/" > Home </NavLink>  </li>
            <li> <NavLink to="new"> New User </NavLink></li>
            <li> <NavLink to="about"> About me </NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar