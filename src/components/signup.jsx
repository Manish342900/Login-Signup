import React, { useState } from 'react';
import "./style.css";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Signup = () => {
    
    const [formData, setFormData] = useState({
        id: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [toggle, setToggle] = useState(true);

    
    function passwordVerify() {
        if (formData.password !== formData.confirmPassword) {
            toast.warn("Passwords don't match!");
            return false;
        }
        return true;
    }

    
    const togglePasswordVisibility = () => {
        setToggle(!toggle);
    };

   
    function submitSignUp(e) {
        e.preventDefault();

        if (!passwordVerify()) return;

        let regobj = { id: formData.id, email: formData.email, password: formData.password };

        fetch("https://test-api-1-opt6.onrender.com/users", {
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

           
            setFormData({ id: "", email: "", password: "", confirmPassword: "" });

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

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className='login-container signup'>
            <h1>Sign-Up</h1>
            <form onSubmit={submitSignUp}>
                <div className='input-container'>
                    <input
                        value={formData.id}
                        onChange={handleChange}
                        type="text"
                        name="id"
                        required
                    />
                    <div className='labeline'>Name</div>
                </div>
                <div className='input-container'>
                    <input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        required
                    />
                    <div className='labeline'>Email</div>
                </div>
                <div className='input-container'>
                    <input
                        value={formData.password}
                        onChange={handleChange}
                        type={toggle ? "password" : "text"}
                        name="password"
                        required
                    />
                    <div className='labeline'>Password</div>
                    <span className='eyeicon' onClick={togglePasswordVisibility}>
                        {toggle ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className='input-container'>
                    <input
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        type={toggle ? "password" : "text"}
                        name="confirmPassword"
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
