import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <nav className='footer__nav'>
        <ul>
                <Link to='/'><div className='footer__option'><p>Home</p></div></Link>
                <Link to='/create'><div className='footer__option'><p>Create</p></div></Link>
                <Link to='/'><div className='footer__option'><p>Account</p></div></Link>
                <Link to='/orders'><div className='footer__option'><p>Orders</p></div></Link>
        </ul>
      </nav>
      <p className='footer__copyright'>hi@raraity.com | Copyright © 2023</p>
    </footer>
  );
}

export default Footer