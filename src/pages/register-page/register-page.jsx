import React from 'react'
import "./register-page.css"
import Register from '../../components/register/register'

function RegisterPage(props) {
    return (
        <div>
            <Register submitted={props.submitted} handleChange={props.handleChange} handleSubmit={props.handleSubmit} registerInfo={props.registerInfo}/>
        </div>
    )
}

export default RegisterPage
