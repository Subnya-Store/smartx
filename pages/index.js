// import { Dashboard } from '@mui/icons-material'
import React,{useEffect,useState} from 'react'
import Header1 from '../src/components/HeaderTime'
import Slider from '../src/components/Slider'
import Home from '../src/Mui/Home'
import Dashboard  from './dashboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'


export default function index() {
  const [Token,setToken]=useState(null)
  const [Pressed,setPressed]=useState(null)
  const selector = useSelector(x=>x)

  useEffect(()=>{
    const user = localStorage.getItem('user')
    
    setToken(user)
  },[])
  useEffect(()=>{
    console.log(selector)
  },[Pressed])
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
    {Token != null?<Dashboard Token={Token} toast={toast}/>:<Home toast={toast}/>}
    </div>
  )
}