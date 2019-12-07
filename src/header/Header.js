import React from 'react';
import logo from '../github-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="https://github.com/" className="logo-container">
        <img src={logo} alt="github logo" />
      </a>
      <div>
        <h1>Github Stars</h1>
        <h2>List of the Most Popular Github Repos</h2>
      </div>
    </header>
  );
}

export default Header;
