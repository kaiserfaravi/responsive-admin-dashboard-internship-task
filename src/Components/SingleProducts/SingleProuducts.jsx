import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleProuducts = ({productdata}) => {
    console.log(productdata);
    
    const {name,id,data} = productdata;
    return (
    <div className="card bg-base-100  shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Name: {name} </h2>
        <p> Color : {data?.color?data.color:"Not Found"} </p>
        <p> Capacity : {data?.capacity?data.capacity:"Not Found"} </p>
        <div className="card-actions ">
          <button className="btn w-full btn-primary">
            <NavLink to={`/product/${id}`}>product Details</NavLink>
          </button>
        </div>
      </div>
    </div>
    );
};

export default SingleProuducts;