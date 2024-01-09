import React, { useEffect, useState } from 'react';
import Sidebar from '../src/components/dashboard/Sidebar';
import SidebarMobile from '../src/components/dashboard/SidebarMobile';
import PlacementTreeNew from '../src/components/dashboard/PlacementTreeNew';
import API from '../src/API/API';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import Home from '../src/Mui/Home';

export default function smartmatrix() {
  const [reff, setReff] = useState([]);
  const [datas, setdata] = useState({});

  const [Token, setToken] = useState(null)
  useEffect(() => {
    const user = localStorage.getItem('user')

    setToken(user)
  }, [Token])

  useEffect(() => {
    API.fetchGet('/findrefferal')
      .then(response => setReff(response.data))
      .catch(error => console.log(error));
  }, []);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     const decode = jwt_decode(user);
  //     setdata(decode);
  //   }
  // }, []);

  const dispatch = useDispatch();
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
    <>
      {Token ?
        <div className='flex h-[90%] flex-row'>
          <div>
            <Sidebar />
            <SidebarMobile />
          </div>
          {reff.length > 0 ? (
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
                  {datas && <PlacementTreeNew />}
                </div>
              </div>
              <div className='flex flex-col w-full overflow-y-auto'>
                <h3 className='text-primary p-5 font-bold text-lg'>Your Referral</h3>
                <div className='grid grid-cols-5 md:grid-cols-10 gap-2 p-5'>
                  {reff.map((x, i) => (
                    <p key={i} className='bg-primary p-1 text-sm text-texting rounded-3xl flex justify-center items-center'>{x.User.username}</p>
                  ))}
                </div>
              </div>
            </div>
          ) : <p>Loading..</p>}
        </div>
        : <Home />}
    </>
  );
}
