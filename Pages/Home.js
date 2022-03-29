import Header from '../Components/Header';
import Footer from '../Components/Footer';
import image_vw_fusca from '../images/image_vw_fusca.png';

function Home() {
  return (
    <main>
      <Header />
      <section className='home'>
        <p>A aplicação possibilita interação com o banco de dados, permitindo: </p>
        <p>Exebição, criação, edição e remoção de modelos de veículos</p>
        <img alt='car vw fusca' src={ image_vw_fusca }/>
      </section>
      <Footer />
    </ main>
  );
}
  
export default Home;