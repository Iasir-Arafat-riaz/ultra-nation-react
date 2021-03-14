import React from 'react';
import "./Country.css"

const Country = (props) => {
  console.log(props)
  const {name,capital,flag}=props.country
  // const addEventHandler=props.addEventHandler

  
  return (
    <div className="country">
      
      <h1>{name}</h1>
      <img src={flag} alt=""/>
      
      <h3>Capital - {capital}</h3>
      
      
      <div>
        <button onClick={()=>props.addEventHandler(props.country.nativeName)}>Click Here</button>
      </div>
    </div>
    
  );
};

export default Country;

