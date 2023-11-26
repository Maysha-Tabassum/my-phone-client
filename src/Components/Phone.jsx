import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone);
    return (
        <div>
            <h2>{phone.name}</h2>
            <p><small>Price: ${phone.price}</small></p>
            <img src={phone.image} alt="" />
            <p><button>Buy Now</button></p>
        </div>
    );
};

export default Phone;