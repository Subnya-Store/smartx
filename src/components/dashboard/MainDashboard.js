import React, { useState } from "react";
import TopHeaderDB from "./TopHeaderDB";
import RefferalTable from "./RefferalTable";
import Plans from "./Plans";
import SliderDB from "../SliderDB";
import Wallet from "./Wallet";
import NewsTicker from "../NewsTicker";
// import PlanTest from "./PlanTest";
import Modal from 'react-modal'

export default function MainDashboard({ name, Token }) {
  const [alert, setAlert] = useState(false)
  return (
    <div className=" overflow-x-scroll">
      <div className="sm:mb-10 mb-52">
        {/* {alert && <div className="flex justify-between px-1 py-2 w-full md:hidden text-xs bg-yellow-300">
          Please use Meta mask or trust wallet browser to purchase and upgrade your packages
          <div className="font-extrabold" onClick={() => setAlert(false)}>x</div>
        </div>} */}
        <Modal
          isOpen={alert}
          className={"bg-[url('/images/casino.jpg')] bg-cover sm:w-[50%] w-[80%] h-[70%] fixed top-[5%] left-[10%] sm:left-[25%] rounded-2xl "}
        >
          <div
            className="absolute inset-0 text-white h-[100%] flex justify-center  font bg-primary opacity-70 rounded-2xl"
            style={{ zIndex: -1 }}
          >
            <div className=' flex flex-col justify-center w-[80%] items-center mt-2'>
              <img src="images/smart(1).png" className="h-10 md:h-24 " />
              <div className="font-extrabold">ANNOUNCEMENT</div>
              <div className="font-extrabold text-lg">wellcome to  </div>
              <div className="font-extrabold text-lg">SmartxBlockChain </div>
              <div className="text-center font-bold">
                the world best networking project make your future and earn million dollars with SmartxBlockChain
              </div>
              <div className="w-[90%] h-[2px] rounded-xl bg-black">
              </div>
              <div className="text-center font-extrabold text-lg">
                free income
              </div>
              <div className="text-center font-bold">
                Share your referal id and earn 50% by referal and 50%  by placement  from activate pakage and 25% by referal and 70% by placement from upgrading pakage!
              </div>
              <button onClick={()=> setAlert(false)} className="mt-4 py-3 px-16 rounded-xl border-2 font-extrabold text-xl border-red-700">okay</button>
            </div>
          </div>
        </Modal>

        <TopHeaderDB />
        <div className=" sm:px-4 sm:mb-0.5 -mt-3 rounded-2xl shadow-2xl">
          <SliderDB />
        </div>
        <div className="sm:mx-4 sm:rounded-md">
          <NewsTicker />
        </div>
        <div className="flex md:flex-row flex-col justify-between sm:mx-4 my-1">
          <Wallet />


        </div>
        <div className="w-[100%] -mt-2">
          <Plans />
          {/* <PlanTest /> */}
        </div>
        <div className="flex flex-col px-2 sm:px-4">
          <RefferalTable Token={Token} />
        </div>
      </div>
    </div>
  );
}
