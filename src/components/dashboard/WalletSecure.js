import React, { useEffect, useState } from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { ImMail2 } from "react-icons/im";
import API from "../../API/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WalletSecure({ toast, active, setActivate }) {
  // const [active, setActivate] = useState("")
  const [verifynow, setverifynow] = useState(false)
  const [code, setverifycode] = useState('')
  useEffect(() => {
    API.fetchGet('/activate')
      .then(x => setActivate(x.data.msg))
      .catch(x => console.log(x))
  }, [])
 
  return (
    <div className="grid p-2 rounded-2xl shadow-lg bg-primary grid-cols-4 w-[100%]">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="col-span-12 px-2  flex justify-between w-[100%]">
        <div >
          <p className="text-xs md:text-sm text-texting">Security Level</p>

          {active == "activated" ?
            <p className="text-xs md:text-sm text-green-300">Verified</p> :
            <p className="text-xs md:text-sm text-texting">Un-Verified</p>
          }
        </div>
        <div className="flex items-center justify-center flex-col  ">
          {/* <p className="text-sm text-texting">
            <BsTelephoneForwardFill />
          </p> */}
          {/* {!verifynow ? active != "activated" && <button onClick={doMail} className="text-sm  text-texting">
            <ImMail2 />
          </button> :
            <form onSubmit={verifyCode}>
              <input type="text" placeholder="Verification code" onChange={e => setverifycode(e.target.value)} className="p-1  rounded-lg" />
            </form>} */}
        </div>
      </div>
    </div>
  );
}
