import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    const {name,email,address}= user;
    return (
        <div>
 <div className="card  w-1/2 mx-auto my-5 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <p className='font-semibold'>Name: {name}</p>
   <p> Email:{email} </p>
   <p>City: {address.city} </p>
   <NavLink className='bg-teal-500 text-white w-1/4 mx-auto rounded-lg' to={'/'}>Back to Home</NavLink>
  </div>
  
</div>
        </div>
    );
};

export default UserDetails;