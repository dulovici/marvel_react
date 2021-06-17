import { useEffect, useState } from 'react';
import './App.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

function App() {
  const key = '57a4249a4879ba67cbdc852312c377d8';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${key}`)
      .then(res => res.json())
      .then(dta => setData(dta.data.results))
  }, [])


  return (
    <>
      <Header />
      <Main data={data} />
    </>
  );
}

export default App;




//  http://gateway.marvel.com/v1/public/characters?apikey=____
//  const key = 57a4249a4879ba67cbdc852312c377d8;