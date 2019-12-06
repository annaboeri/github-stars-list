import React from 'react';
import logo from '../github-logo.png';

const Header = () => {
  return (
    <header className="Header">
      <a href="https://github.com/"><img src={logo} classname="github-logo" alt="github logo" /></a>
      <h1>Github All Stars</h1>
    </header>
  );
}

export default Header;
