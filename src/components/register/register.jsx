import React from 'react'
import "./register.css"
import {Link} from "react-router-dom"

const Register = (props) => {

  
        return(
            <div className="register-form-container">
            <form onSubmit={props.handleSubmit} className='register-form'>
                <h1 className="sign-heading">Register</h1>
                <input onChange={props.handleChange} value={props.registerInfo.firstName} placeholder="First Name" name="firstName" type="text" />
                {props.submitted && (props.registerInfo.firstName.length <= 4 || !props.registerInfo.firstName) ? <span className="message">Please enter a first name with length of 4 characters or more</span> : null}

                <input onChange={props.handleChange} value={props.registerInfo.lastName} placeholder="Last Name" type="text" name="lastName" />
                {(props.submitted && (props.registerInfo.lastName.length<=4 || !props.registerInfo.lastName)) ? <span className="message">Please enter a last name with length of 4</span> : null}

                <input onChange={props.handleChange} value={props.registerInfo.email} placeholder="Email" type="email" name="email" />
                {(props.submitted && !props.registerInfo.email) ? <span className="message">Please enter an email name</span> : null}

                <input onChange={props.handleChange} value={props.registerInfo.password} placeholder="Password" type="password" name="password" />
                {(props.submitted && (props.registerInfo.password.length <= 4 || !props.registerInfo.password)) ? <span className="message">Please enter a password with length of 4</span> : null}

                <input onChange={props.handleChange} value={props.registerInfo.confirmPassword} placeholder="Confirm Password" type="password" name="confirmPassword" />
                {(props.submitted && (!props.registerInfo.confirmPassword || props.registerInfo.password !== props.registerInfo.confirmPassword)) ? <span className="message">Please make sure the passwords match</span> : null}

                <button type="submit" className='register-btn'>Register</button>
                <p className='already-have'>Already have an account <Link to="/login">Login</Link></p>
            </form>
        </div>
        )
}

export default Register
