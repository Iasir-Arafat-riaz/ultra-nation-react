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
    .catch(error=>console.log(error))
  },[])
  return (
    <div className="App">
      
       
       
      
    </div>
  );
}

export default App;
