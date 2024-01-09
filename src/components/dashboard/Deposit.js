import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function Deposit({ setIsModalOpen }) {
  const data = useSelector((x) => x);
  return (
    <div>
      <div>
        <div className="flex justify-end text-primary p-4 sm:h-[0%] h-[10%]">
          <AiOutlineClose
            onClick={() => setIsModalOpen(false)}
            className="cursor-pointer text-primary"
            size={25}
          />
        </div>

        <div className="flex sm:mx-[10%] mx-[2%] my-5 justify-between">
          <div className="flex text-primary">
            Name:
            <p className="mx-2 text-primary font-bold uppercase">
              {data && data.username}
            </p>
          </div>
          <div className="flex text-primary">
            Refferal ID:
            <p className="mx-2 text-primary font-bold">
              {data && data.refferalID}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center flex-col gap-4">
            <div className="text-primary font-bold text-2xl">Amount</div>
            <input
              type="number"
              className="p-1 text-primary font-bold w-24 bg-purple-50 rounded-md shadow-2xl border border-primary text-center focus:outline-primary"
            />
          </div>
          <div className="flex items-end justify-center sm:mb- h-[100%] my-5 ">
            <button className="p-2 bg-secondary hover:bg-primary rounded-md shadow-xl cursor-pointer transform hover:scale-110 transition ease-in duration-300 hover:font-bold hover:text-texting text-texting sm:hover:border sm:hover:border-primary">
              Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
