import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="green">
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo"> Logo </Link>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to='/favorites'>Favorites</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}
