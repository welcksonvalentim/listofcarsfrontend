import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Contact() {
    return (
      <main>
        <Header />
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
        <Footer />
      </ main>
    );
  }
  
  export default Contact;