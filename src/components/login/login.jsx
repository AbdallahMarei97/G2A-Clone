import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'


const Login = (props) => {
   
    
        return(
                <div className="login-form-container">
                <form onSubmit={props.handleSubmit} className='login-form'>
                    <h1 className="sign-heading">Sign In</h1>
                    <input onChange={props.handleChange} value={props.loginInfo.email} placeholder="Email" type="email" name="email" />
                    <input onChange={props.handleChange} value={props.loginInfo.password} placeholder="Password" type="password" name="password" />
                    <button className='login-btn' type="submit">Login</button>
                    <p className='dont-have-account'>Don't Have an account? <Link to="/register">Register Here</Link></p>
                </form>
            </div>
        )
    
}

export default Login
