import React, { useEffect, useState } from 'react';

import ProductSmokingHero from './Components/ProductSmokingHero';
import AppFooter from './Components/AppFooter';
import ProductHero from './Components/ProductHero';
import Slider from '../components/Slider';
import Header12 from './Header12';
import Announcement from '../components/Announcement';
import Accordian from './Components/Accordian';
import { fetchGet } from '../../redux/actions/auth'
import Api from '../../src/API/API'
import Howitworks from '../components/homepage/Howitworks1';
import Howitworks3 from '../components/homepage/Howitworks3';
import Howitworks2 from '../components/homepage/Howitworks2';
import Howitworks1 from '../components/homepage/Howitworks1';
import Info from '../components/homepage/Info';
import Wallets from '../components/homepage/Wallets';
import { differenceInMilliseconds, addMilliseconds, format } from 'date-fns';
import Register from '../components/homepage/Register';
import VisitorsPage from '../components/homepage/VisitorsPage';
import VisitorPage1 from '../components/homepage/AnimatedNumber';
import AnimatedNumber from '../components/homepage/AnimatedNumber';

function Home({ toast }) {
  const [Refresh, setRefresh] = useState(0);
  const [Visitors, setVisitors] = useState(0);
  const [Users, setUsers] = useState(0);
  useEffect(() => {
    Api.fetchGet('/admin')
    setRefresh('1')
  }, [])
  useEffect(()=>{
    Api.fetchGet('/timers')
    .then(x=>(setVisitors(x.data.visitor),setUsers(x.data.users)))
    .catch(x=>console.log(x))
  },[])

  const [startDate, setStartDate] = useState(new Date('2023-08-18T12:00:00'));
  const [endDate, setEndDate] = useState(new Date());
  const [userCount, setUserCount] = useState(null);

  return (
    <div
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundAttachment: "fixed",
        // backgroundSize: "cover",
      }}
      className='bg-brickwall overflow-hidden'
    >
      <Header12 toast={toast} />

      <Slider />
      <Announcement />
      {/* <ProductHero /> */}
      <div className='flex items-center sm:my-10 my-2 justify-center '>
        <div className='flex justify-between items-center text-texting gap-5 sm:p-5 p-3 px-5 sm:rounded-md rounded-xl bg-primary'>
          <div className='sm:text-3xl text-lg font-extrabold hover:cursor-pointer'>
            {/* Users: {Users} */}
            User:<AnimatedNumber value={Users} />
          </div>
          <div className='sm:text-3xl text-lg font-extrabold hover:cursor-pointer'>
            {/* Visitors: {Visitors} */}
            Visitor: <AnimatedNumber value={Visitors} />
          </div>
        </div>
      </div>
      {/* <VisitorsPage/>. */}
      <Info />
      {/* <VisitorPage1/> */}
      <Howitworks1 />
      <Howitworks2 />
      <Howitworks3 />
      <Wallets />
      <Register toast={toast}/>
      <Accordian />
      
      <AppFooter />

    </div>
  );
}

export default Home;