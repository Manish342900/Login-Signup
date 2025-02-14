import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ setUser }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false); 

  const navigate = useNavigate();

  
  const togglePasswordVisibility = () => {
    setTogglePassword(!togglePassword);
  };

  function submit(e) {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      toast.warn("Please fill in both fields.");
      return;
    }

    setLoading(true);

    fetch(`https://test-api-1-opt6.onrender.com/users?email=${credentials.username}`)
      .then((res) => res.json())
      .then((respo) => {
        setLoading(false);
        setUser(respo);
        console.log(respo);

        if (respo.length === 0) {
          toast.error("No user found");
        } else if (respo[0]?.password === credentials.password) {
          toast.success("Login Successful");
          navigate("/welcome");

          setCredentials({ username: '', password: '' });
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
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            value={credentials.username}
            type='email'
          />
          <div className='labeline'>Email</div>
        </div>
        <div className='input-container'>
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            value={credentials.password}
            type={togglePassword ? 'text' : 'password'} 
          />
          <div className='labeline'>Password</div>
          <span className='eyeicon' onClick={togglePasswordVisibility}>
            {togglePassword ? <FaEye /> : <FaEyeSlash />}
          </span>
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
