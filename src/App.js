import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"



function App() {
  const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));

  return (
    <div className="App">
     <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
     <Routes>
     <Route exact path="/" element={<HomePage />} />
     <Route exact path="/login" element={<LoginPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/register" element={<RegisterPage setLoggedUser={setLoggedUser} />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
