import React from "react";

export default function Wallets() {
  return (
    <div className="w-[100%] flex flex-col my-5 sm:flex-row sm:px-10 bg1-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">
      <div className="sm:w-[30%] flex justify-around">
        <div 
        data-aos="fade-up"
        className="flex flex-row justify-around ">
          <div className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2">
            <div className="flex justify-center items-center">
              <img
                className="w-20  cursor-pointer"
                src="images/WALLET2.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              Trust Wallet
            </div>
          </div>
        </div>
        <div 
        data-aos="fade-down"
        className="flex flex-row justify-around ">
          <div className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2">
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET3.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              Binance Wallet
            </div>
          </div>
        </div>
      </div>
      <div 
      data-aos="zoom-in-up"
      className="sm:w-[80%] sm:pr-20 flex flex-col my-2">
        <h1 className="font-extrabold text-2xl text-center text-primary underline my-2 sm:my-0 cursor-pointer">
          Wallets
        </h1>
        <div className="text-justify text-primary font-bold sm:font-normal ">
          Discover seamless blockchain wallet management! Easily connect and
          interact with multiple wallets like Trust Wallet, Binance Wallet, and
          more, all in one place.Your gateway to efficient crypto management.
        </div>
      </div>
    </div>
  );
}
