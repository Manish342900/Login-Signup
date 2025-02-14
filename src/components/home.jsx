
import '../App.css';
import Login from './login';
import Signup from './signup';
import { useState } from 'react';
import Toggle from './toggle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home({setUser}) {
  const [islogin,setIsLogin]=useState(false)
  return (
    <div className='container'>
      <Toggle setIslogin={setIsLogin} login={islogin} />
      
      {
        islogin &&  <Login setUser={setUser} />
      }
      {
        !islogin &&  <Signup />
      }
      <ToastContainer/>
     
      
    </div>
  );
}

export default Home;
