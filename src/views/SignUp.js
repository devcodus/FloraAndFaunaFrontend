import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function SignUp() {
    const [redirect, setRedirect]= useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const reqBody = { 
            username: username,
            email: email,
            password: password
        }

        const url = 'http://127.0.0.1:5000/api/signup'
        const options = {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": 'application/json'
            }
        }

        if(password!==confirmPassword){
            console.log('those passwords don"t match')
        }

       

            const res = await fetch(url, options );
            const data = await res.json();       
            console.log(data)   
            if (data.status==='ok'){
                setRedirect(true)
            }
    };



  return redirect?<Navigate to='/login'/>: 
  
  (

    <div className='container formCard'>
        <h1 className='align-self-center'>Sign Up</h1>

        <form className='container formCard'onSubmit={handleSubmit}>
            
            <input className='col-4 align-self-center' name ='username' placeholder='Username'/>
            <input className='col-4 align-self-center' name='email' placeholder='Email'/>
            <input className='col-4 align-self-center' name='password' type='password' placeholder='Password'/>
            <input className='col-4 align-self-center' name='confirmPassword' type='password' placeholder='Confirm Password'/>
            <button className='col-4 align-self-center' type="submit ">Sign Up</button>

        </form>
    </div>
  )
}
