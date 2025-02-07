import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleProuducts = ({productdata}) => {
    // console.log(productdata);
    
    const {name,id,data} = productdata;
    return (
    <div className="card bg-base-100  shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Name: {name} </h2>
        <p> Color : {data?.color?data.color:"Not Found"} </p>
        <p> Capacity : {data?.capacity?data.capacity:"Not Found"} </p>
        <div className="flex justify-between ">
          
            <NavLink className="  w-full bg-lime-600 p-1 text-center text-white font-semibold rounded-lg" to={`/product/${id}`}>Details</NavLink>
            <NavLink className=" w-full bg-lime-600 p-1 mx-2 text-center text-white font-semibold rounded-lg" to={`/product/${id}`}>Add </NavLink>
            <NavLink className=" w-full bg-lime-600 p-1 text-center text-white font-semibold rounded-lg" to={`/product/${id}`}>Delete </NavLink>
          
        </div>
      </div>
    </div>
    );
};

export default SingleProuducts;