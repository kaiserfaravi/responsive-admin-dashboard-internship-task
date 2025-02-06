import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const details =useLoaderData()
    const {name,data}=details;
    return (
        <div>
            <div className="card  w-1/2 mx-auto my-5 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <p className='font-semibold'>Phone Name: {name}</p>
    <p> Color : {data?.color?data.color:"Not Found"} </p>
    <p> Capacity : {data?.capacity?data.capacity:"Not Found"} </p>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetails;