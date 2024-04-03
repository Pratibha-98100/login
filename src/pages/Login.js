import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../App.css"

function Login() {
    const navigate=useNavigate();

    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const [errors, setErrors] = useState();

    const handleLogin=(e)=>{
        e.preventDefault();

      const users = JSON.parse(localStorage.getItem('user')) || [];
       const foundUser = users.find(user => user.email === email && user.password === password);

      if (foundUser) {
        navigate('/account',{ state: { email } });
      } 
      else {
        setErrors("Email is not registered or  entered password is wrong !")
      }

      
    }

    
  return (
    <div>
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
     
      <div id="loginpage">
        <form onSubmit={handleLogin}>
        <TextField required label="Email Address" placeholder="Enter Email" variant="outlined"  type="email" onChange={(e)=>setEmail(e.target.value)} />
        <br /><br/>

        <TextField required  label="Password" type="password"  variant="outlined" onChange={(e)=>setPassword(e.target.value)}/>
        
        <br/><br/><br/>
        <Button id="signup" variant="contained" color="primary" type="submit">Login</Button>
        </form>
      </div>

      {errors && <span style={{ color: "red" }}>{errors}</span>}
      
    </div>
  );
}

export default Login;
