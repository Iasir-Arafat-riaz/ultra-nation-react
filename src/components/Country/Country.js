import React from 'react';
import "./Country.css"

const Country = (props) => {
  
  return (
    <div className="country">
      <h1>{props.name}</h1>
      <h3>Capital - {props.capital}</h3>
      
      <img src={props.flag} alt=""/>

    </div>
  );
};

export default Country;

