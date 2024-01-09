import React from "react";


export default function Howitworks2() {

  return (
    <div className="w-[100%] flex flex-col sm:flex-row sm:px-10 bg1-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">

      <div data-aos="zoom-in-right" className="sm:w-[20%] flex flex-col">
        <div className="flex h-[200px] sm:h-[100%] justify-center sm:justify-start">
          <img className="sm:w-[70%] w-[35%] h-[100%]" src="images/Beige Minimalist Phone Chat Message Instagram Story.gif" alt="" />
        </div>
      </div>
      <div
      data-aos="zoom-in-up"
      className="sm:w-[80%] sm:pr-20 flex justify-center flex-col">
        <h1 className="font-extrabold text-2xl text-center text-primary underline my-2 cursor-pointer">
          Potential of Blockchain Technology
        </h1>
        <div className="text-justify text-primary font-bold sm:font-normal ">
          Blockchain technology has emerged as a revolutionary force across various industries, promising transformative changes that are reshaping traditional systems. At its core, blockchain is a decentralized and distributed ledger that offers a myriad of benefits.
        </div>
      </div>
    </div>
  );
}
