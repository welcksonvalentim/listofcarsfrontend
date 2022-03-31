import React from 'react';
import Home from './Pages/Home';
import Cars from './Pages/Cars';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className='links-header'>
      <Home />
      <Cars />
      <Footer />
    </section>
  );
}

export default App;
