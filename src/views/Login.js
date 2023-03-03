import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Login({logMeIn}) {
  const redirect = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;    
    const password = e.target.password.value;


    const url = 'http://127.0.0.1:5000/api/login'
    const options = {
      method: "POST",
      headers: {
        Authorization:`Basic ${btoa(username+':'+password)}`
      }
    }


    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data)
    if(data.status == 'ok'){
      console.log('yay log me in')
      logMeIn(data.user)
      redirect('/feed')
    }
  };




  return (

    <div className='container formCard'>
      <h1 className='align-self-center'>Log In </h1>

      <form className='container formCard' onSubmit={handleSubmit}>

        <input className='col-4 align-self-center' name='username' placeholder='Username'/>
        <input className='col-4 align-self-center' name='password' type='password' placeholder='Password' />
        <button className='col-4 align-self-center' type="submit ">Log In</button>

      </form>
    </div>

  )
}
