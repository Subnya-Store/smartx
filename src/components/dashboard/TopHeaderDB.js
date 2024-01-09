import React,{useState} from "react";
import Notification from "./Notification";
import UserDB from "./UserDB";
import Search from "./Search";
import NotificationNew from "./NotificationNew";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IoNotificationsSharp } from "react-icons/io5";

export default function TopHeaderDB({ name }) {
  const [open,setOpen]=useState(false)
  return (
    <div className="sm:px-4 pb-3">
    
      <div className="bg-primary justify-between flex relative">
        <div className="flex items-center">
          <div onClick={()=>setOpen(!open)}><IoNotificationsSharp className="text-texting cursor-pointer hover:text-white" size={35} /></div>
          {/* {open&&
          <div className="h-[500px] w-[300px] bg-primary border-2 rounded-2xl border-secondary text-white absolute z-40 left-11 top-3">
            <div className="w-full h-[100px] bg-gray-300 rounded-2xl p-2 flex justify-center items-center">
              <div className="w-[95%] bg-white rounded-xl h-[80%]">

              </div>
            </div>
          </div>
          } */}
        </div>
        <div className="mx-0.5">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
