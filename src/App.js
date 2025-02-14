import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Welcome from './components/welcome';

function App() {
  const [user,setUser]=useState(null)
  useEffect(()=>{
    console.log(user)
  },[user])
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home setUser={setUser}/>} />
          <Route path="/welcome" element={<Welcome user={user}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
