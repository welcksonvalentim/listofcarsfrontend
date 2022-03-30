import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <h3>Welckson Profile</h3>
      <section className='links-header'>
        <Link to='/' className='links-header'>
          <h4>home</h4>
        </Link>
        <Link to='/Cars' className='links-header'>
          <h4>lista</h4>
        </Link>
      </section>
    </header>
  );
}

export default Header;