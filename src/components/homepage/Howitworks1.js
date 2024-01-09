import React from "react";


export default function Howitworks1() {

  return (
    <div className="w-[100%] flex flex-col sm:my-10 sm:py-5 md:flex-row-reverse justify-center items-center text-center  
    bg1-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%
    ">
      <div data-aos="zoom-in-left" className="w-[30%] flex flex-col justify-center items-center">
        <div className="flex justify-start w-[250%] sm:w-[100%] sm:justify-center items-center">
          <img className="-mb-14 -mt-2" src="images/HowItWorks.gif" alt="" />
        </div>
      </div>
      <div data-aos="zoom-in-up" className="w-[100%] p-1 gap-1 flex justify-center items-center flex-col sm:px-[10%]">
        <div className="flex my-2 sm:my-0 justify-center items-center text-primary font-extrabold text-3xl underline cursor-pointer">
          How It Works
        </div>
        <div className="sm:p-2 my-1 sm:my-0 text-primary text-justify font-bold sm:font-normal">
          Join by signing up, purchasing a package, and waiting as 2 individuals join under you – one on your left, and one on your right. Once they're in, you'll receive 50% + 50% from their investment, fully recovering yours. After, their commissions come to you (and also you will get 75% from placement & 25% from Refferal of each upgrade in Upgrade income) Upgrade to unlock deeper levels, adding 2 more below each, growing your team and ongoing commissions till level 8.
        </div>
      </div>
    </div>
  );
}
