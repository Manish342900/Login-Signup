import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    setLoading(true); 

    fetch(`https://test-api-1-opt6.onrender.com/users?email=${username}`)
      .then((res) => res.json())
      .then((respo) => {
        setLoading(false);
        setUser(respo)
        console.log(respo)

        if (respo.length === 0) {
          toast.error("No user found");
        } else if (respo[0]?.password === password) {
          toast.success("Login Successful");
          navigate("/welcome");
        } else {
          toast.warn("Password doesn't match");
        }
      })
      .catch((error) => {
        setLoading(false); 
        console.error(error);
        toast.error("Error occurred. Please try again.");
      });
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
          <button type='submit' className='btn' disabled={loading}>
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
