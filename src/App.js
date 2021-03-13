import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[countries,setContries]=useState([])
  console.log(countries)
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>setContries(data))
  },[])
  return (
    <div className="App">
      
       <h2>{countries.length}</h2>
       {countries.map(country=><li>{country.name} <img src={country.flag}></img></li> )}
       
      
    </div>
  );
}

export default App;
