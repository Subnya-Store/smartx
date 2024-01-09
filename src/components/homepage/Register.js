import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import SignupPage from '../../Mui/Components/SignupPage'
import Loginpage from '../../Mui/Components/Loginpage';

export default function Register({ toast }) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [state, setState] = useState(2)
  // console.log(state,'<===========')
  return (
    <div
      data-aos="flip-down"
      className='flex justify-center my-[10%] sm:my-[5%]'>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Login"
        className={
          " sm:mx-[20%] mx-2 sm:my-[10%] my-5 sm:h-[70%] h-[85%] rounded-3xl bg-purple-50 py-10 shadow-2xl"
        }
      >

        {state == 1 ? <Loginpage setState={setState} toast={toast} /> : <SignupPage setState={setState} toast={toast} />}
      </Modal>
      <div onClick={openModal} className='white-texting sm:p-5 font-bold text-2xl p-3 px-5 sm:rounded-md rounded-xl bg-primary cursor-pointer'>Register Now!</div>
    </div>
  )
}
