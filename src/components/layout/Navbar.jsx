import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="black">
        <div className="nav-wrapper">
          
          <NavLink to='/' className="notes-logo">Notes</NavLink>
          <NavLink to='/favorites' className="hover-fav">Favorites</NavLink>

          {/* <ul className="right hide-on-med-and-down hover-fav">
            <li></li>
          </ul> */}
        </div>
      </nav>
    )
}
