import React from 'react';
import { NavLink } from 'react-router-dom';

const Singleuser = ({data}) => {
    // console.log(data);
    const {id,name,address,email} = data;
    return (
        <div className="card bg-base-100  shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Name: {name} </h2>
    <p>Email : {email} </p>
    <p>City Name: {address.city} </p>
    <div className="flex justify-between">
      
        <NavLink className=" w-full bg-lime-600 p-1 text-center text-white font-semibold rounded-lg" to={`/data/${id}`}> Details</NavLink>
        <NavLink className=" w-full bg-lime-600 p-1 mx-2 text-center text-white font-semibold rounded-lg" to={`/addUser`}>Add </NavLink>
        {/* <NavLink className=" w-full bg-lime-600 p-1 text-center text-white font-semibold rounded-lg" to={`/data/${id}`}>Delete</NavLink> */}
      
    </div>
  </div>
</div>
    );
};

export default Singleuser;