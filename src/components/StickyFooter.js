import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { FcHome } from 'react-icons/fc'
import { MdDashboard } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { IoIosNotifications } from 'react-icons/io'

function Copyright() {
  return (
    <Typography variant="body2" className='text-texting'>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '100vh',
        position:'fixed',
        bottom:0
      }}
      className='w-[100%]'
    >
      
      <Box
        component="footer"
        sx={{
          
          mt: 'auto',
        }}
        className='bg-primary text-texting w-[100%] sm:hidden'
      >
        <div className='m-auto h-16 justify-center items-center grid grid-cols-4  text-center'>
        <div className='ml-10'><FcHome size={25}/></div>
        <div className='ml-10'><MdDashboard size={25}/></div>
        <div className='ml-10'><AiFillSetting size={25}/></div>
        <div className='ml-10'><IoIosNotifications size={25}/></div>
        </div>
      </Box>
    </Box>
  );
}