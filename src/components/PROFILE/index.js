import React, { useState, useEffect, useRef } from "react";
import { FiEdit } from "react-icons/fi";
import { TbWallet } from "react-icons/tb";
import { GiThreeFriends, GiCardboardBox } from "react-icons/gi";
import { MdEmojiPeople } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { RiLockPasswordFill } from "react-icons/ri";
import WalletSecure from "../../components/dashboard/WalletSecure";
import UserTime from "../../components/dashboard/UserTime";
import VerifyPlease from "../../components/dashboard/VerifyPlease";
import Edit from "../../components/dashboard/Edit";
import ResetPassword from "../../components/dashboard/ResetPassword";
import Modal from "react-modal";
import Deposit from "../../components/dashboard/Deposit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../../API/API";
import { useSelector, useDispatch } from "react-redux";

export default function profile() {
  const [active, setActivate] = useState("")
  const [state, setState] = useState(10);
  const [modalIsOpen, setIsOpen] = useState(false);
  const refferalID = useSelector((state) => state.refferalID);
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);


  function closeModal() {
    setIsOpen(false);
  }

  const [data, setdata] = useState(false);
  const [name, setname] = useState(false);

  useEffect(() => {
    API.fetchGet('/activate')
      .then(x => setActivate(x.data.msg))
      .catch(x => console.log(x))
  }, [data])

  useEffect(() => {
    const user = localStorage.getItem("user");
    setdata(user);
  }, []);

  useEffect(() => {
    API.fetchGet('/finduserdetail')
      .then(x => (setname(x.data.users.username), dispatch({
        type: "username",
        payload: x.data.users.username
      })))
      .catch(x => console.log(x))
  }, [data])

  useEffect(() => {
    API.fetchGet('/finduserdetail')
      .then(x => {
        dispatch({
          type: 'username',
          payload: x.data.users.username
        })
      })
  }, [])

  useEffect(() => {
    API.fetchGet('/myreff')
      .then(x => (
        dispatch({
          type: 'refferalID',
          payload: x.data.refferal_code
        })
      ))
      .catch(x => console.log(x))
  }, [])

  const inputRef = useRef(null);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`https://www.smartxblockchain.com/?ref=${refferalID}`);
    document.execCommand('copy');
    showTooltip();
  };

  const showTooltip = () => {
    const tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = `Copied!`;
  };

  const resetTooltip = () => {
    const tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copy to clipboard';
  };


  return (
    <div className={`md:flex bg-bgsecondary w-[100%]`}>


      <div className="flex flex-row p-2 w-[100%] h-screen  overflow-hidden">

        <div className="grid grid-cols-4 gap-1 w-[100%] ">
          <div className=" flex flex-col rounded-2xl shadow-2xl col-span-1 bg-primary h-fit py-2 ">
            <div className=" flex items-center justify-center mt-2 ">
              <img
                src="images/smart(1).png"
                className="rounded-full w-10 cursor-pointer"
                alt="Avatar"
              />
            </div>
            <div className="flex items-center text-texting uppercase cursor-pointer justify-center mx-2 mt-2 text-sm">
              <div>{name && name}</div>
            </div>

            <div className=" my-2 mx-2 border-b border-white"></div>
            <Modal
              isOpen={isModalOpen}
              ariaHideApp={false}
              onRequestClose={closeModal}
              className={
                " sm:mx-[20%] mx-10 sm:my-[10%] my-5 sm:h-[50%] h-[50%] rounded-3xl bg-purple-50 shadow-2xl"
              }
            >
              {state == "Deposit" && (
                <Deposit setIsModalOpen={setIsModalOpen} />
              )}
              {/* {state == "Withdraw" && (
                <Withdraw setIsModalOpen={setIsModalOpen} toast={toast} />
              )} */}

              <ToastContainer
                position="top-right"
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
            </Modal>



            <div>
              <div
                onClick={() => setState(0)}
                className="flex flex-col lg:flex-row justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <FiEdit
                    className="text-texting cursor-pointer"
                    size={24}
                  />
                  <div className="flex flex-col gap-0 sm:gap-1 text-texting sm:flex-row justify-center items-center">
                    <div className="text-sm cursor-pointer">
                      My
                    </div>
                    <div className="text-sm cursor-pointer">
                      Profile
                    </div>
                  </div>
                </div>
              </div>
              <div className=" my-4 mx-2 border-b border-white"></div>

              <div
                onClick={() => setState(1)}
                className="flex flex-col lg:flex-row justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center">
                  <RiLockPasswordFill
                    className="text-texting cursor-pointer"
                    size={25}
                  />
                  <div className="flex flex-col gap-0 sm:gap-1 text-texting sm:flex-row justify-center items-center">
                    <div className="text-sm cursor-pointer">
                      Reset
                    </div>
                    <div className="text-sm cursor-pointer">
                      Password
                    </div>
                  </div>
                </div>
              </div>
              <div className=" my-4 mx-2 border-b border-white"></div>


              <div
                onClick={() => setState(4)}
                className="flex flex-col lg:flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <MdEmojiPeople
                    className="text-texting cursor-pointer"
                    size={25} />
                  <div className="flex flex-col gap-0 sm:gap-1 text-texting sm:flex-row justify-center items-center">
                    <div className="text-sm cursor-pointer">
                      Refferal
                    </div>
                    <div className="text-sm cursor-pointer">
                      Link
                    </div>
                  </div>
                </div>
              </div>

              <div className=" my-4 mx-2 border-b border-white"></div>

              <div onClick={() => {
                localStorage.removeItem("user"), window.location.assign("/");
              }}
                className="flex flex-col lg:flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <SlLogout
                    className="text-texting cursor-pointer"
                    size={25} />
                  <div className="text-texting justify-center items-center">
                    Logout
                  </div>
                </div>
              </div>




            </div>
          </div>

          <div className="col-span-3 overflow-y-auto mb-8  flex flex-col">
            {active != 'activated' && <VerifyPlease />}
            <WalletSecure toast={toast} active={active} setActivate={setActivate} />

            <UserTime />
            {(state == 0 && <Edit />) ||
              (state == 1 && <ResetPassword />)
              ||
              // (state == 2 && <PlacementTreeNew state={state} />) ||
              // (state == 3 && <Pakages />)
              state == 4 && (<div className="sm:mx-[30%] ">
                <div className="font-bold text-xs md:xl w-[100%] md:w-auto text-primary p-4 border border-primary rounded-3xl">
                  smartxblockchain.com/?ref={refferalID}
                </div>
                <div className="tooltip w-full">
                  <button className="border border-primary w-full p-2 px-3 rounded-3xl text-texting bg-primary" onClick={handleCopyClick} onMouseOut={resetTooltip}>
                    <span className="tooltiptext" id="myTooltip">
                      Copy to clipboard
                    </span>
                    Copy
                  </button>
                </div>


              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
