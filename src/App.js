import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import { useState } from 'react';
import Toggle from './components/toggle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [islogin,setIsLogin]=useState(false)
  return (
    <div className='container'>
      <Toggle setIslogin={setIsLogin} login={islogin} />
      
      {
        islogin &&  <Login />
      }
      {
        !islogin &&  <Signup />
      }
      <ToastContainer/>
     
      
    </div>
  );
}

export default App;
