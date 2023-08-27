import React from 'react';
import logo from "../../assets/images/logo.svg"

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><img src={logo}/></li>
                <li></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header