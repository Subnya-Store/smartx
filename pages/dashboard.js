import React, { useState, useEffect } from "react";
import MainDashboard from "../src/components/Dashboard/MainDashboard";
import Sidebar from "../src/components/dashboard/Sidebar";
import SidebarMobile from "../src/components/dashboard/SidebarMobile";
import jwt_decode from "jwt-decode";
import axios from 'axios'
import apiUrl from "../redux/services/api";
import SliderDB from "../src/components/SliderDB";
import { useDispatch, useSelector } from "react-redux";
import Api from '../src/API/API'
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Transaction from "../src/components/transactions/Transaction";
import PlacementTreeNew from "../src/components/dashboard/PlacementTreeNew";
import Profile from "../src/components/PROFILE";

export default function Dashboard({ Token }) {
  const [data, setdata] = useState(false);
  const [name, setname] = useState(false);
  const dispatch = useDispatch()
  const dataS = useSelector(x => x)
  const [reff, setReff] = useState([]);

  const router = useRouter();
  const { ref } = router.query;

  const LoadFunction = async () => {
    console.log(ref, "<==ref++")
    if (ref == undefined) {
      console.log(ref)
    } else {
      localStorage.removeItem("user"),
        window.location.assign(`/?ref=${ref}`);
    }
  }

  useEffect(() => {
    LoadFunction()
  }, [ref])
  useEffect(() => {
    Api.fetchGet('/finduserdetail')
      .then(x => {
        dispatch({
          type: 'username',
          payload: x.data.users.username
        })
          ,
          dispatch({
            type: 'refferalID',
            payload: x.data.users.id
          })
      }

      )
    Api.fetchGet('/finduserpakage')
      .catch(err => console.log(err))
  }, [Token])
  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   const decode = jwt_decode(user);
  //   setdata(decode);
  // }, []);
  useEffect(() => {
    Api.fetchGet('/findrefferal')
      .then(response => setReff(response.data))
      .catch(error => console.log(error));
  }, []);
  const [values, setValues] = useState(10);

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setValues(newValue);
    dispatch({
      type: 'treeParams',
      payload: newValue
    });
  };

  return (
    <div className="flex bg-bgprimary overflow-auto h-screen bg-contain">
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
      <Sidebar name={name} />
      <SidebarMobile name={name} />
      {/* <SliderDB/> */}
      {dataS.PageState == 'dashboard' && <MainDashboard Token={Token} name={name} />}
      {dataS.PageState == 'transaction' && <Transaction />}
      {dataS.PageState == 'smartmatrix' && <div className='flex w-full h-[90%] flex-row'>
        {Token ? (
          <div className='w-full'>
            <div className='flex flex-col w-full overflow-y-auto'>
              <div className='flex flex-col h-96 w-full'>
                <div className='flex justify-center items-center'>
                  <div className='bg-primary text-primary w-full flex justify-center items-center flex-col'>
                    <h3 className='text-white p-1 font-bold text-2xl'>Your Placements</h3>
                    <p className="text-xs md:text-base text-white font-extrabold">Select Tree</p>
                    <select
                      name="cars"
                      id="cars"
                      className='w-full border border-primary'
                      value={values}
                      onChange={handleValueChange}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="350">350</option>
                    </select>
                  </div>
                </div>
                <PlacementTreeNew />
              </div>
            </div>
            <div className='flex flex-col w-full overflow-y-auto'>
              <h3 className='text-primary p-5 font-bold text-lg'>Your Referral</h3>
              <div className='grid grid-cols-5 md:grid-cols-10 gap-2 p-5'>
                {reff.length > 0 && reff.map((x, i) => (
                  <p key={i} className='bg-primary p-1 text-sm white-texting rounded-3xl flex justify-center items-center'>{x.User.username}</p>
                ))}
              </div>
            </div>
          </div>
        ) : <p>Loading..</p>}
      </div>}
      {dataS.PageState == 'profile' && <Profile/>}
    </div>
  );
}
