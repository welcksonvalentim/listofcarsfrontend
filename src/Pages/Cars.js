import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://listofcarsbackend.herokuapp.com/cars';

function Cars() {
/*   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); */

/*   useEffect(() => { requestAPI() }, []);

  async function requestAPI () {
    const API = await axios.get(API_ENDPOINT).then((response) => response.json());
    setData(API);
    setLoading(false)
    return API;
  }; */

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
   if(fcs.message) return alert('Jogador já existe!')
   setLoading(false)
  }, [files])
})

  if (loading) return <h1>loading</h1>;
  return (
    <h4>{console.log(files[0])}</h4>
  /* <table>
      <tr>  
        {Object.keys(files[0]).map(
          (key) => (<th key={ Math.random() }>{key}</th>),
        )}
      </tr>
      <tbody>
        {files.map((rowInfo) => (
          <tr key={ Math.random() }>
            {
              Object.values(rowInfo).map(
                (cellInfo) => (<td key={ Math.random() }>{cellInfo}</td>),
              )
            }
          </tr>
        ))}
      </tbody>
    </table> */
  );
}

export default Cars;