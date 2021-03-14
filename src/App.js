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
  
},[]);

const[cart,setCart]=useState([])

console.log(countries)
const addEventHandler=(country)=>console.log(country)
 return (<div>
   <h1 style={{textAlign:"center"}}>total countries : {countries.length}</h1>
   
     {countries.map(country=><Country country={country} addEventHandler={addEventHandler} key={country.numericCode}></Country>)}
   
 </div>)
  

  }

  export default App;
