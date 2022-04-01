import Header from '../Components/Header';

function Home() {
  return (
    <main>
      <Header />
      <section className='home'>
        <h3>Descrição Aplicação</h3>
        <p>A aplicação possibilita interação com o banco de dados, permitindo: Exibição de Marcas, modelos e versões de veículos.</p>
        <p>Ao clicar sobre o card será redirecionado para página especializada, com informações técnicas do veículo.</p>
      </section>
    </ main>
  );
}
  
export default Home;