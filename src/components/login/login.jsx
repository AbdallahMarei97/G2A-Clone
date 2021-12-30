import React,{useState} from 'react'
import "./login.css"
import {Link,useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'


const Login = (props) => {
   
    const navigate = useNavigate()
    const [loginInfo,setLoginInfo] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo({...loginInfo,[name]:value})
    }

    const handleSubmit = (e) => {
       e.preventDefault();

    if (!localStorage.getItem("users") || !loginInfo.email || !loginInfo.password){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong email or password!",
      });
      return
    };

    let all_users_From_Local = JSON.parse(localStorage.getItem("users"));

    let flag = false
    all_users_From_Local.forEach((acc) => {
      if (loginInfo.email === acc.email && loginInfo.password === acc.password) {
        localStorage.setItem("loggedUser", JSON.stringify(acc));
        navigate("/");
        flag = true
      } 
    });
    if(!flag){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong email or password!",
      });
    }
    props.setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
        setLoginInfo({
            email: "",
            password: ""
        })
    }
        return(
                <div className="login-form-container">
                <form onSubmit={handleSubmit} className='login-form'>
                    <h1 className="sign-heading">Sign In</h1>
                    <input onChange={handleChange} value={loginInfo.email} placeholder="Email" type="email" name="email" />
                    <input onChange={handleChange} value={loginInfo.password} placeholder="Password" type="password" name="password" />
                    <button className='login-btn' type="submit">Login</button>
                    <p className='dont-have-account'>Don't Have an account? <Link to="/register">Register Here</Link></p>
                </form>
            </div>
        )
    
}

export default Login
