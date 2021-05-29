import React from 'react'
import './header.scss'

function Header() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="//source.unsplash.com/80x40" alt="logo" />
      </div>
      <div className="menu-section">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
