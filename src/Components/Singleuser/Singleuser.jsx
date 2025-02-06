import React from 'react';
import { NavLink } from 'react-router-dom';

const Singleuser = ({data}) => {
    console.log(data);
    const {id,name,address,email} = data;
    return (
        <div className="card bg-base-100  shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Name: {name} </h2>
    <p>Email : {email} </p>
    <p>City Name: {address.city} </p>
    <div className="card-actions ">
      <button className="btn w-full btn-primary">
        <NavLink to={`/data/${id}`}>User Details</NavLink>
      </button>
    </div>
  </div>
</div>
    );
};

export default Singleuser;