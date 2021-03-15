import React from 'react';

const Cart = (props) => {
    const crt= props.cart
    
    
    // let populations=0
    // for (let i = 0; i < crt.length; i++) {
    //     const country = crt[i];
    //     populations= populations+country.population;
    
        
    }
    return (
        <div>
            <h4>this is cart {crt.length}</h4>
            <p>total population ={populations}</p>
        </div>
    );
};

export default Cart;