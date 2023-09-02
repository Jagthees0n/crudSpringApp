import axios from 'axios'
import api from '../pages/api'
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username : "",
    name : "",
    email : ""
  })

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        await api.post("/user", user); // Use the api instance here
        navigate("/");
    } catch (error) {
        console.error("API Error:", error);
    }
};

  const{username, name, email} = user

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md6 offset-md-3 border rounded p-4 mt-2'>
            <h2 className='text-center m-4'>Register User</h2>
            <form onSubmit={(e)=>{onSubmit(e)}}>
            <div className='mb-3'>
                <label htmlFor='UserName' className='form-label'>User Name</label>
                <input className='form-control' 
                type='{text}' 
                placeholder='Enter user name' 
                name='username' 
                value={username}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input className='form-control' 
                type='{text}' 
                placeholder='Enter name' 
                name='name' 
                value={name}  
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>Email</label>
                <input className='form-control' 
                type='{text}' 
                placeholder='Enter your email address' 
                name='email' 
                value={email}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/" >Cancel</Link>
            </form>
        </div>
      </div>
    </div>
  )
}
