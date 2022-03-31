import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://listofcarsbackend.herokuapp.com/cars';

function Cars() {
  const [ loading, setLoading ] = useState(true);
  const [ data ] = useState([]);
  useEffect(() => {
    const search = () => {
    const result =  axios.get(API_ENDPOINT)
        .then(response => response.data);
    return result;
}
  async function getCars(){
    try {
      const cars = await search();
      return cars;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  getCars().then(async (fcs) => {
    data.push(fcs);
   if(fcs.message) return alert('Car already exist')
   setLoading(false)
  }, [data])
})

  if (loading) return <h1>loading...</h1>;
  return (
    <main className='Cars'>
      {data[0].map((car) => 
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