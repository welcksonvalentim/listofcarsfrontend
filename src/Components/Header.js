import React from 'react';
import image_vw_fusca from '../images/image_vw_fusca.png';

function Header() {
  return (
    <header className='header'>
      <img alt='car vw fusca' src={ image_vw_fusca }/>
      <h1>Full Stack Cars</h1>
    </header>
  );
}

export default Header;