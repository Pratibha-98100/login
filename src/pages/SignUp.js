import { Box, Button, TextField , styled} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import "../App.css"



function SignUp() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [errors, setErrors] = useState({});

  const navigate= useNavigate();

    const handleSignUp=()=>{

      if(vaild()){
        let newUser = {
          name: name,
          password: password,
          email: email,
          number: number,
          company: company
        };
    
        // Retrieve existing users data from local storage
        const existingUsers = JSON.parse(localStorage.getItem('user')) || [];

        // Append new user data to the existing users array
        const updatedUsers = [...existingUsers, newUser];

        // Update local storage with the updated users array
        localStorage.setItem('user', JSON.stringify(updatedUsers));

        navigate('/login')
      
      }
    }

    const vaild= ()=>{
       
      const errors = {};
        let isValid = true;

        if (!name.trim()) {
          errors.name = "Name is required";
          isValid = false;
        } 
        else if (!isNaN(name)) {
          errors.name = "Name must be a string";
          isValid = false;
        }

        
        if (!number) {
          errors.number = "number is required";
          isValid = false;
        } 
        else if (number.length===10) {
          errors.number = "Enter a vaild number";
          isValid = false;
        }


        if(!email){
          errors.email = "Please enter email id";
          isValid = false;
         }
        
          const users = JSON.parse(localStorage.getItem('user')) || [];
          // Check if email already exists
         const emailExists = users.some((user) => user.email === email);

         if (emailExists) {
          errors.email = "This email is already registered!" ;
          isValid= false;
        } 
   
        if (!company) {
          errors.company = "Please enter a company name";
          isValid = false;
        }

        if (!password) {
          errors.password = "Please enter  password";
          isValid = false;
        }

        setErrors(errors);
        return isValid;
    }


  return (
    <div>

      <h2>Create your PopX account</h2>
      
      <form onSubmit={handleSignUp}>
          <Box>
              <TextField  required label="Full Name" placeholder="Enter Name" variant="outlined"  onChange={(e) => setName(e.target.value)} value={name}/><br/>
              {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
              <br />
            
              <TextField required type='number' placeholder="Enter phone number" variant="outlined"     onChange={(e) => setNumber(e.target.value)} value={number}/><br/>
              {errors.number && <span style={{ color: "red" }}>{errors.number}</span>}
              <br />

              <TextField required label="Email Address" placeholder="Enter Email" variant="outlined"   type="email"  onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
              {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
              <br />

              <TextField label="Password" type="password" variant="outlined"     onChange={(e) => setPassword(e.target.value)}  value={password}/><br/>
              {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
              <br/>

              <TextField required label="Company Name" placeholder="Enter Your Company Name"  variant="outlined"     onChange={(e) => setCompany(e.target.value)} value={company}/><br/>
              {errors.company && <span style={{ color: "red" }}>{errors.company}</span>}
           
           <br/>
              <FormControl> 
              <FormLabel id="demo-row-radio-buttons-group-label">Are you an agency ?</FormLabel> 
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
                
              </RadioGroup>
              </FormControl>
          </Box>
     
<br/>
          <Box>
          <Button id="signup" variant='contained' type='submit' color='primary'>Create Account</Button>
          </Box>
       </form>
    </div>
  )
}

export default SignUp
