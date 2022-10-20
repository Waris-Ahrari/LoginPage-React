import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, redirect,Link } from "react-router-dom"

const Login = ({ setLoginUser }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:6969/Login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                console.log('Here');
                <redirect to = "/homepage"/>
            })
    }
    return (
        <form onSubmit={login}>
            <div className='form-inner'>
                <h2>Login</h2>

                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name="email" id="email" onChange={handleChange} value={user.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Password:</label>
                    <input type='password' name="password" id="password" onChange={handleChange} value={user.password} />
                </div>

                <input type='submit' value='LOGIN' />

                <h5>Need an Account?</h5>
                <Link to="/Register">Sign Up</Link>
            </div>
        </form>
    )
}

export default Login