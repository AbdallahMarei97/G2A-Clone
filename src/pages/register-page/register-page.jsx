import React from 'react'
import "./register-page.css"
import Register from '../../components/register/register'

function RegisterPage(props) {
    return (
        <div>
            <Register setLoggedUser={props.setLoggedUser}/>
        </div>
    )
}

export default RegisterPage
