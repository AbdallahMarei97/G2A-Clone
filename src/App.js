import './App.css';
import {useState} from "react"
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'


function App() {
  
  const navigate = useNavigate()
  const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")))
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

  const handleRegisterChange = (e) => {
      setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  }
  

  const handleRegisterSubmit = (e) => {
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
              setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
              setSubmitted(false)
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
    const [loginInfo,setLoginInfo] = useState({
        email: "",
        password: ""
    })
    

    const handleLoginChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo({...loginInfo,[name]:value})
    }

    const handleLoginSubmit = (e) => {
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

    all_users_From_Local.forEach((acc) => {
      if (loginInfo.email === acc.email && loginInfo.password === acc.password) {
        localStorage.setItem("loggedUser", JSON.stringify(acc));
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong email or password!",
        });
      }
    });
    setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
        setLoginInfo({
            email: "",
            password: ""
        })
    }
    const signOut = () => {
      localStorage.removeItem("loggedUser");
      setLoggedUser("")
    }
  return (
    <div className="App">
     <NavBar loggedUser={loggedUser} signOut={signOut} />
     <Routes>
     <Route exact path="/" element={<HomePage />} />
     <Route exact path="/login" element={<LoginPage handleChange={handleLoginChange} handleSubmit={handleLoginSubmit} loginInfo={loginInfo} />} />
     <Route exact path="/register" element={<RegisterPage submitted={submitted}  handleChange={handleRegisterChange} handleSubmit={handleRegisterSubmit} registerInfo={registerInfo}/>} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
