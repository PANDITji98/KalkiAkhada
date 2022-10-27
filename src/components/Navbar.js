import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';                  //stack in MUI is used to list items or to display is more attractively
import Logo from '../assets/images/Logo.png'


const Navbar = () => {
  return (
    <Stack
    direction="row" justifyContent="space-around" sx={{gap: {sm: '122px', xs:'40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px='20px'>                   {/* sm- smalldevices and xs- extrasmall devices : MUI allow us to create responsiveness as well!*/}
      <Link to="/">                                                                                                                                                       {/* to make logo visible and to point towards the logo!*/}
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px'}}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end">

        <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>                                                     {/*used BorderBottom to add a line below HOME*/}
        <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar