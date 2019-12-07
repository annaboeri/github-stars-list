import React from 'react';
import logo from '../github-logo-footer.png';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span>Created by</span>
        <a href="https://github.com/annaboeri" className="logo-container">
          Anna Boeri
        </a>
      </p>
      <p>
        <span>Powered by</span>
        <a href="https://github.com/" className="logo-container">
          <img src={logo} className="footer-logo" alt="github logo" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
