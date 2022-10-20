import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const send = () => {
        const { name, email, password } = user
        

        if (name && email && password) {
            axios.post("http://localhost:6969/Register", user)
                .then(res => 
                    console.log(res),
                )
        }
        else {
            alert("invalid input")
        };
    }
return (
    <form onSubmit={send}>
        <div className='form-inner'>
            <h2>Register</h2>
            {/* {(error !== "") ? (<div className='error'>{error}</div>) : ""} */}

            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name="name" id="name" onChange={handleChange} value={user.name} />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name="email" id="email" onChange={handleChange} value={user.email} />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Password:</label>
                <input type='password' name="password" id="password" onChange={handleChange} value={user.password} />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Confirm Password:</label>
                <input type='password' name="Con_password" id="Con_password" onChange= {handleChange} />
            </div>

            <input type='submit' value='Sign up' />

            <h5>Already registered?</h5>
            <Link to="/login">LogIn</Link>

        </div>
    </form>
)
}

export default Register; 