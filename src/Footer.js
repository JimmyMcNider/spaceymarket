import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <nav className='footer__nav'>
        <ul className='footer__option'>
                <div><p>Home</p></div>
                <div><p>Create</p></div>
                <div><p>Account</p></div>
                <div><p>Orders</p></div>
        </ul>
      </nav>
      <p className='footer__copyright'>hi@raraity.com | Copyright © 2023</p>
    </footer>
  );
}

export default Footer