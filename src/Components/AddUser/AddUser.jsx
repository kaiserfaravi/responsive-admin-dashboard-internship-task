import axios from 'axios';
import React from 'react';

const AddUser = () => {
    const [values,setValues]=({
        name:'',
        email:'',
        city:''
    })
    const handleSubmit =e=>{
        e.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/users`,values)
        .then(res=>setValues(res))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" onChange={e=>setValues({...values,name:e.target.value})} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" onChange={e=>setValues({...values,email:e.target.value})} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input type="text" name='city' placeholder="Your City" onChange={e=>setValues({...values,city:e.target.value})} className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit the Data</button>
        </div>
      </form>
    </div>
  </div>
</div>

    );
};

export default AddUser;