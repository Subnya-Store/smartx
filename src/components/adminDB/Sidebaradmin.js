import React, { useState } from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { GrGoogleWallet } from "react-icons/gr";
import { TbBusinessplan } from "react-icons/tb";
import { SlLogout } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";

export default function Sidebaradmin() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        open ? "w-[20%]" : "w-[80px]"
      } bg-primary h-screen hidden md:flex md:flex-col shadow-md  absolute" id="sidenavSecExample`}
    >
      <div className="pt-4 pb-2 px-6 w-[100%]">
        <div href="#!">
          <div className="flex items-center">
            <div onClick={() => setOpen(!open)} className="shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                className="rounded-full w-10"
                alt="Avatar"
              />
            </div>
            <div className="flex flex-row justify-between items-center px-2 w-[100%]">
              {open && (
                <div className="hidden sm:flex text-sm text-texting ">Jason McCoel</div>
              )}
              {open && (
                <div
                  className="hidden sm:flex text-sm text-texting cursor-pointer -mr-6"
                  onClick={() => setOpen(!open)}
                >
                  <TfiClose size={18}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div>
          <ul className="relative px-1">
            <li className="relative">
              <Link
              href={'/'}>
              <div
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-secondary transition duration-2000 ease-in-out active:bg-primary"
                href="/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primaryhoverhover"
              >
               
                  <HiHome className=" mr-3" size={25} />
                    Home
              </div>
                    </Link>
            </li>
            <li className="relative">
              <Link
                href={'/profile'}>
              <div
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-secondary transition duration-2000 ease-in-out"
                href="/profile"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primaryhover"
              >
              
                  <FaUserAlt className=" mr-3" size={25} />
                
                    Profile
              </div>
                    </Link>
            </li>
            <li className="relative">
              <Link
              href={'/transactions'}>
              <div
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-secondary transition duration-2000 ease-in-out"
                href="/transactions"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primaryhover"
              >
                
                  <GrGoogleWallet className=" mr-3" size={25} />
                
                    Transactions
              </div>
                    </Link>
            </li>
            
           
          </ul>
          <hr className="my-2" />
          
        </div>
      ):
      (
        <ul>
          <li className="relative">
            <div
              className="flex items-center text-sm py-12 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-tertiary transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primaryhoverhover"
            >
              
              <Link
                  href={'/'}><HiHome size={40} /></Link>
            </div>
          </li>
          <li className="relative">
            <div
              className="flex items-center text-sm py-12 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-tertiary transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primaryhoverhover"
            >
              
              <Link
                  href={'/profile'}><FaUserAlt size={40} /></Link>
            </div>
          </li>
          <li className="relative">
            <div
              className="flex items-center text-sm py-12 px-6 h-12 overflow-hidden text-texting text-ellipsis whitespace-nowrap rounded hover:text-texting hover:bg-tertiary transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primaryhoverhover"
            >
              <Link
              href={'/transactions'}><GrGoogleWallet size={40} /></Link>
            </div>
          </li>
          
        </ul>
      )}
      <div
        className={`${
          open ? "w-[16.9%]" : "w-[80px]"
        }  text-center bottom-0 absolute w-full`}
      >
        <div className="py-2 text-sm flex flex-col justify-center items-center text-secondary">
        <hr className="w-auto py-2" />
        <SlLogout size={30}/>
        </div>
      </div>
      
    </div>
  );
}
