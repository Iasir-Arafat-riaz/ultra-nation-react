import React from 'react';

const Cart = (props) => {
    const crt= props.cart
    
    
    // let populations=0
    // for (let i = 0; i < crt.length; i++) {
    //     const country = crt[i];
    //     populations= populations+country.population;
        
    // }
    //Alternative Way
    const populations=crt.reduce((sum,exmpl) => sum+exmpl.population,0)

    return (
        <div style={{backgroundColor:"skyBlue"}}>
            <h4>this is cart {crt.length}</h4>
            <p>total population ={populations}</p>
        </div>
    );
};

export default Cart;