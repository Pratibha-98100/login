import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import './AccountSetting.css'
import profilePic from '../download.jpeg';
import { useLocation } from 'react-router-dom';
import "../App.css"


const navbar = styled(AppBar)`
    background:white
`;
    

function AccountSetting() {

  const location = useLocation();
  const { email } = location.state;  
  const users = JSON.parse(localStorage.getItem('user')) || [];
  const foundUser = users.find(user => user.email === email);

  return (
    <div>
        <AppBar  id="navbar" position='static' className='nav'>
            <Toolbar>
                <Typography variant='h6'>
                    Account Setting
                </Typography>
            </Toolbar>
        </AppBar>

        <Box className='content'>
          <div className='profileInfo'>
            <img src={profilePic} alt="Profile" className='profilePic' />
            <div>
              <Typography variant="h5" className='profileName'>{foundUser.name}</Typography>
              <Typography variant="body1">{foundUser.email}</Typography>
            </div>
          </div>

          <div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </p>
          </div>
      </Box>
    </div>
  )
}

export default AccountSetting