
import React from 'react'
import { getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {useNavigate } from "react-router-dom"
const Home = () => {
  console.log(getAuth());
  const auth= getAuth();
  const navigate= useNavigate();
  const logOut=async()=>{
    await auth.signOut();
    navigate('/');
  }
  
  return (
    
    <div className="containment text-center">
      <div className="containment text-center">
        welcome to home page
      </div>
      <div className='my-5'>
        <h1>{auth.currentUser.displayName}</h1>
        <h2>{auth.currentUser.email}</h2>
        <img src={auth.currentUser.photoURL} alt="" />
      </div>
      <button className="btn-warning" onClick={logOut}>Login Out</button>
    </div>
  )
}

export default Home
