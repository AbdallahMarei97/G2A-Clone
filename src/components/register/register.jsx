import React,{useState} from 'react'
import "./register.css"
import Swal from 'sweetalert2'
import {useNavigate,Link} from "react-router-dom"

const Register = (props) => {

    const navigate = useNavigate()
    const [allUsersArray,setAllUsersArray] = useState(JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")).length : 0)
    const [allUsers,setAllUsers] = useState(JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [])
    const [registerInfo, setRegisterInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        appointments: [],
        cartItems: [],
        id: allUsersArray + 1,
    })
    const [submitted,setSubmitted] = useState(false)

    const handleChange = (e) => {
        setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
    }
    

    const handleSubmit = (e) => {
        const {firstName, lastName,email,password,confirmPassword} = registerInfo;
        e.preventDefault();
        setSubmitted(true)
        if (!firstName || !lastName || !email || !password || !confirmPassword)
        return;
        let flag = false;
        if(firstName.length > 4  && lastName.length > 4 && email && password.length > 4 && password === confirmPassword){
            allUsers.forEach(item => {
                if(item.email === registerInfo.email){
                    flag = true;
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email already exists!",
                      });
                      return;
                }
            })
            if(!flag){
                allUsers.push(registerInfo)
                localStorage.setItem("users", JSON.stringify(allUsers))
                localStorage.setItem("loggedUser", JSON.stringify(registerInfo))
                navigate("/")
                setAllUsers(JSON.parse(localStorage.getItem("users")))
                props.setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
                setRegisterInfo({
                    ...registerInfo,
                    lastName: "",
                    firstName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                })
                
            }
        }
    }
        return(
            <div className="register-form-container">
            <form onSubmit={handleSubmit} className='register-form'>
                <h1 className="sign-heading">Register</h1>
                <input onChange={handleChange} value={registerInfo.firstName} placeholder="First Name" name="firstName" type="text" />
                {submitted && (registerInfo.firstName.length <= 4 || !registerInfo.firstName) ? <span className="message">Please enter a first name with length of 4 characters or more</span> : null}

                <input onChange={handleChange} value={registerInfo.lastName} placeholder="Last Name" type="text" name="lastName" />
                {(submitted && (registerInfo.lastName.length<=4 || !registerInfo.lastName)) ? <span className="message">Please enter a last name with length of 4</span> : null}

                <input onChange={handleChange} value={registerInfo.email} placeholder="Email" type="email" name="email" />
                {(submitted && !registerInfo.email) ? <span className="message">Please enter an email name</span> : null}

                <input onChange={handleChange} value={registerInfo.password} placeholder="Password" type="password" name="password" />
                {(submitted && (registerInfo.password.length <= 4 || !registerInfo.password)) ? <span className="message">Please enter a password with length of 4</span> : null}

                <input onChange={handleChange} value={registerInfo.confirmPassword} placeholder="Confirm Password" type="password" name="confirmPassword" />
                {(submitted && (!registerInfo.confirmPassword || registerInfo.password !== registerInfo.confirmPassword)) ? <span className="message">Please make sure the passwords match</span> : null}

                <button type="submit" className='register-btn'>Register</button>
                <p className='already-have'>Already have an account <Link to="/login">Login</Link></p>
            </form>
        </div>
        )
}

export default Register
