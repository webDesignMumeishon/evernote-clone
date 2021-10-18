import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="black">
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo">Notes</Link>
          <ul className="right hide-on-med-and-down hover-fav">
            <li><NavLink to='/favorites'>Favorites</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}
