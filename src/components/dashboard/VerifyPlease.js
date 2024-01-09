import React,{useState} from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";
import { IoMdCloseCircle } from "react-icons/io";

export default function VerifyPlease() {
  const [alerts,setAlerts]=useState(true)
  return (
    <div
      className={`alert ${alerts == true ? '':'hidden'} bg-primary rounded-lg py-5 px-6 mb-3 text-sm text-white inline-flex items-center w-full alert-dismissible fade show`}
      role="alert"
    >
      <div>
        <div
          className=" rounded-lg text-sm text-white inline-flex items-center w-full"
          role="alert"
        >
          
          Please complete the verification below before you proceed with the
          withdrawal request.
        </div>
       
      </div>

      <button
      onClick={()=> setAlerts(!alerts)}
        type="button"
            className="btn-close box-content w-4 h-4 p-1 ml-auto -mt-10  text-white border-none    rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-150 hover:text-white hover:opacity-75 hover:no-underline"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <IoMdCloseCircle size={35}/>
      </button>
    </div>
  );
}
