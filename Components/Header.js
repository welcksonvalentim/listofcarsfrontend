import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <h3>Welckson Profile</h3>
      <section className='links-header'>
        <Link to='/' className='links-header'>
          <h4>Quem sou eu</h4>
        </Link>
        <Link to='/knowledge' className='links-header'>
          <h4>Conhecimentos</h4>
        </Link>
        <Link to='/projects' className='links-header'>
          <h4>Projetos</h4>
        </Link>
        <Link to='/contact' className='links-header'>
          <h4>Contato</h4>
        </Link>
      </section>
    </header>
  );
}

export default Header;