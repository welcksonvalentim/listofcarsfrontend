import Header from '../Components/Header';

function Home() {
  return (
    <main>
      <Header />
      <section className='home'>
        <h3>Descrição Aplicação</h3>
        <p>A aplicação possibilita interação com o banco de dados, permitindo: </p>
        <p>Exibição, criação, edição e remoção de modelos de veículos</p>
      </section>
    </ main>
  );
}
  
export default Home;