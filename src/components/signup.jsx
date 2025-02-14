import React, { useState } from 'react';
import "./style.css";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [id, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [toggle, setToggle] = useState(true);
    

    // Password verification function
    function passwordVerify() {
      if (password !== confirmPassword) {
        toast.warn("Passwords don't match!");
        return false;
      }
      return true;
    }

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setToggle(!toggle);
    };

    // Handle form submission
     async function submitSignUp(e) {
        e.preventDefault();

        if (!passwordVerify()) return; 

        let regobj = { id, email, password };
        
        await fetch("https://test-api-1-opt6.onrender.com/users", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(regobj)
        })
        .then(() => {
            toast.success("Sign-up successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            
        })
        .catch((error) => {
            toast.error("Error during sign-up. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            console.error(error);
        });
    }

    return (
        <div className='login-container signup'>
            <h1>Sign-Up</h1>
            <form onSubmit={submitSignUp}>
                <div className='input-container'>
                    <input
                        value={id}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        required
                    />
                    <div className='labeline'>Name</div>
                </div>
                <div className='input-container'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                    <div className='labeline'>Email</div>
                </div>
                <div className='input-container'>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={toggle ? "password" : "text"}
                        required
                    />
                    <div className='labeline'>Password</div>
                    <span className='eyeicon' onClick={togglePasswordVisibility}>
                        {toggle ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className='input-container'>
                    <input
                        type={toggle ? "password" : "text"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <div className='labeline'>Confirm Password</div>
                    
                </div>
                <div className='button-container'>
                    <button className='btn' type="submit">Signup</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
