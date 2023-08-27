import React from 'react';
import logo from "../assets/images/logo.svg"
import hamburger from "../assets/images/hamburger.svg"

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><img src={logo} alt='logo'/></li>
                <li><img src={hamburger} alt='bar-icon'/></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header