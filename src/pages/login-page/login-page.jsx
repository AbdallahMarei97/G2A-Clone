import React from 'react'
import Login from '../../components/login/login'
import "./login-page.css"


function LoginPage(props) {
    return (
        <div>
            <Login handleChange={props.handleChange} handleSubmit={props.handleSubmit} loginInfo={props.loginInfo}/>
        </div>
    )
}

export default LoginPage
