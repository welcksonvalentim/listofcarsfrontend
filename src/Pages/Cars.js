import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://listofcarsbackend.herokuapp.com/cars';

function Cars() {
  const [ loading, setLoading ] = useState(true);
  const [ files ] = useState([]);
  useEffect(() => {
    const busca = () => {
    const resultado =  axios.get(API_ENDPOINT)
        .then(resp => resp.data);
    return resultado;
}
  async function getJogadores(){
    try {
      const Jogadores = await busca();
      return Jogadores;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  getJogadores().then(async (fcs) => {
    files.push(fcs);
   if(fcs.message) return alert('Car already exist')
   setLoading(false)
  }, [files])
})

  if (loading) return <h1>loading...</h1>;
  return (
    <main className='Cars'>
      {files[0].map((car) => 
        <section className='SectionCars'>
          <img alt={car.model} src={car.image} />
          <div>
            <h4>{car.automaker}</h4>
            <h4>{`MOD.: ${car.model}`}</h4>
            <h4>{`VER.: ${car.version}`}</h4>
          </div>
        </section>
      )}
    </main>
  );
}

export default Cars;