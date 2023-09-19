import React from 'react';
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/hamburger.svg";
import working from "../../assets/images/illustration-working.svg";
import './Header.css'
import Button from '../Button/Button';

const Header = () => {
  return (
    <header>
      <nav className='custom-nav'>
        <li><img src={logo} alt='logo' /></li>
        <li><img className='hamburger' src={hamburger} alt='bar-icon' /></li>
      </nav>
      <div className='working-illustration-container'>
        <img className='working-illustration' src={working} alt='working-illustration' />
      </div>
      <div className='heading-container'>
        <h1>More than just shorter links</h1>
        <p className='sub-heading'>Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>
        <Button />
      </div>
    </header>
  )
}

export default Header;