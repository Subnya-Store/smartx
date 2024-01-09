import React from "react";
import { TbCurrencyDollar } from "react-icons/tb";

export default function Balance({ text, number, type }) {
  return (
    <div className="flex flex-col rounded-lg sm:w-auto w-[100%] bg-slate-100 h-52">
      <div className="text-texting h-16 rounded-t-lg flex justify-center items-center bg-primary">
        <p className="cursor-pointer">{text}</p>
      </div>
      <div className="text-4xl flex justify-center items-center h-[100%] text-primary font-bold">
        <p className="cursor-pointer">{number}</p>
      </div>
    </div>
  );
}
