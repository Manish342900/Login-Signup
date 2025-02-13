import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  async function submit(e) {
    e.preventDefault(); 
    // console.log({ username, password }); 
    await fetch(`https://test-api-1-opt6.onrender.com/users?email=${username}`)
    .then((res)=> res.json())
    .then((respo)=>{
      if(respo[0]?.password == password){
        toast.success("Login Succesful")

      }else if(respo.length==0){
        toast.error("No user found")

      }else if(respo[0]?.password != password){
          toast.warn("password dosen't match")
      }
    }).catch(()=>toast.error("Error"))
    
  }

  return (
    
    <div className='login-container login'>
      
      <h1>Log-In</h1>
      <form onSubmit={submit}>
        <div className='input-container'>

          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type='email'
          />
          <div className='labeline'>Email</div>
        </div>
        <div className='input-container'>
          
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            
          />
          <div className='labeline'>Password</div>

        </div>
        <div className='button-container'>
          <button type='submit' className='btn'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
