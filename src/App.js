import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';


  function App() {
    const[countries,setCountries]=useState([])
useEffect(()=>{
  fetch("https://restcountries.eu/rest/v2/all")
  .then(res=>res.json())
  .then(data=>setCountries(data))
  
},[])
console.log(countries)
 return (<div>
   <h1>total countries : {countries.length}</h1>
   <ul>
     {countries.map(country=><Country name={country.name} capital={country.capital} flag={country.flag}></Country>)}
   </ul>
 </div>)
  

  }

  export default App;
