import React from 'react'
import './style.css' 
import { useNavigate } from 'react-router-dom'

const Welcome = ({user}) => {
  const navigate=useNavigate()
  const {id}=user[0]
  return (
    <div className='welcome-container'>
      <p className='welcome-text'>Welcome</p><br/>
      <p className='welcome-text'>{id || "Default Name"}</p>
      <button onClick={()=>navigate("/")} className='btn'>Log-Out</button>
    </div>
  )
}

export default Welcome
