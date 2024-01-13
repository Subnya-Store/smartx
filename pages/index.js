// import { Dashboard } from '@mui/icons-material'
import React, { useEffect, useState } from 'react';
import Home from '../src/Mui/Home'
import Dashboard from './dashboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
  const [Token, setToken] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('user')

    setToken(user)
  }, [])

  return (
    <div>
      {/* <HeaderTime/> */}
      {/* <Slider/> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {Token != null ? <Dashboard Token={Token} toast={toast} /> : <Home toast={toast} />}
    </div>
  )
}