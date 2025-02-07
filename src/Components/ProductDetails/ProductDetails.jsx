import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const details =useLoaderData()
    const {name,data}=details;
    // console.log("checking");
    return (
        <div>
            <div className="card  w-1/2 mx-auto my-5 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <p className='font-semibold'>Phone Name: {name}</p>
    <p> Color : {data?.color?data.color:"Not Found"} </p>
    <p> Capacity : {data?.capacity?data.capacity:"Not Found"} </p>
    <NavLink className='bg-teal-500 text-white w-1/4 mx-auto rounded-lg' to={'/product'}>Back to Home</NavLink>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetails;