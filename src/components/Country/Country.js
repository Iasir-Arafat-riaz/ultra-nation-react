import React from 'react';
import "./Country.css"

const Country = (props) => {
  
  const {name,capital,flag,population}=props.country
  // const addEventHandler=props.addEventHandler

  
  return (
    <div className="country">
      
      <h1>{name}</h1>
      <img src={flag} alt=""/>
      
      <h3>Capital - {capital}</h3>
      <p>popltn:{population}</p>
      
      
      <div>
        <button onClick={()=>props.addEventHandler(props.country)}>Click Here</button>
      <button>click</button>
      </div>
  
    </div>
    
  );
};

export default Country;

