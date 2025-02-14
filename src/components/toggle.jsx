import React from 'react'
import "./style.css"


const Toggle = ({login,setIslogin}) => {
  return (
    <div className='toggle-box'>
        <div className='toggle-panel toggle-left'>
            <h1>Hello  Welcome</h1>
            <p>{login?"Don't have an account":"Already have an Account"}</p><br/>
            <button className='btn rg' onClick={()=>setIslogin(!login)}>{login?"Register":"LogIn"}</button>
        </div>
      
    </div>
  )
}

export default Toggle
