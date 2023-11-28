import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import  { useState } from 'react'
import {auth} from '../firebase'
import {signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate=useNavigate();
  const handleSubmit= async(e)=>{
    e.preventDefault(); 
    try {
      const user=await signInWithEmailAndPassword(
        auth,
        email,
        pass
      )
      console.log(user)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  const googleSignIn= async()=>{
    try {
        const provider= new GoogleAuthProvider();
        const result= await signInWithPopup(auth,provider);
        navigate('/home');
    } catch (error) {
        console.log(error)
    }
  }
    return (
        <>
            <div>
                <h1 className='text-center'>Login form</h1>
            </div>
            <div style={{ width: '500px', marginLeft: "500px", marginTop: "70px" }}>

                <form onSubmit={handleSubmit}>
                    <div class="form-group" style={{}}>
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                        value={pass}
                        onChange={(e)=>{
                            setPass(e.target.value)
                        }}
                        type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
     
                    <button 
                    
                    type="Login" class="btn btn-primary" style={{ margin: "20px", marginLeft: '200px' }}>Submit</button> <br />
                    <Link to='/register'> <p style={{ backgroundColor:'none', marginLeft:'370px',}} >Register new User</p></Link>
                </form>
            </div>
            <br />
            <div className="container text-center" >
                <button
                onClick={googleSignIn}
                className=' btn btn-primary ' style={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginLeft: '475px' }}>
                    <div style={{ width: '40px' }}>
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" style={{ width: '100%' }} />
                    </div>
                    <div >
                        <h2>Login With Google</h2>
                    </div>
                </button>
            </div>
        </>
    )
}

export default Login
