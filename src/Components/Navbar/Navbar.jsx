import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase/firebase.configue';

const link = <>
<li className='mr-8'><NavLink to='/user'> Users </NavLink></li>
{/* <li className='space-x-2' ><NavLink to='/product' > Add  users </NavLink></li> */}
<li className='space-x-2' ><NavLink to='/product' > Product </NavLink></li>
{/* <li className='space-x-2' ><NavLink to='/product' > Add Product </NavLink></li> */}
</>

const Navbar = () => {
    const [user,setUser]=useState('')
    const provider = new GoogleAuthProvider();
    const googleSignInHandler=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
         
          
          const user = result.user;
          setUser(user)
        
        }).catch((error) => {
          
          const errorCode = error.code;
          const errorMessage = error.message;
          setUser(null)
         
        });
    }

    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Xentro</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user && <p className='mr-2 font-semibold'>{user.displayName}</p>
    }
    <a className="btn" onClick={googleSignInHandler}>Log in with Google</a>
  </div>
</div>
    );
};

export default Navbar;