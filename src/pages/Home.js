import React from 'react';
import "../App.css"

import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate=useNavigate();
    const handleLogin=()=>{
        navigate('/login');
    }
    const handleSignUp=()=>{
        navigate('/signup');
    }
  return (
    <div id="homepage">
      <h2>Welcom to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div id="btn">
        <button onClick={handleSignUp} id="signup">Create Account</button>
        <button onClick={handleLogin} id="login">Already Registered? Login</button>
      </div>
    </div>
  )
}

export default Home
