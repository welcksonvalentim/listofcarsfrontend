import React from 'react';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className='links-header'>
      <Home />
      <Cars />
    </section>
  );
}

export default App;
