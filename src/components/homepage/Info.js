import React from "react";


export default function Info() {

  return (
    <div className="flex flex-col justify-center items-center">

      <div
      data-aos="zoom-in-up"
      className="flex flex-col items-center justify-center">
        <p className="text-primary capitalize text-center flex justify-center items-center font-extrabold text-3xl">
          the world best networking project
        </p>
        <p className="text-primary font-bold text-md sm:my-2">
          Make your future and earn Million Dollars
        </p>
      </div>
      <div data-aos="fade-right">
        <div className=" flex justify-center ">
          <img className="sm:w-[30%] w-[75%] sm:h-[30%] " src="images/World.png" alt="image" />
        </div>
      </div>
      <div data-aos="fade-up" className="p-1 gap-1 flex justify-center items-center flex-col">
        <div className=" rounded-lg sm:min-w-[1500px] p-1 flex justify-center items-center text-primary font-extrabold text-3xl underline cursor-pointer">
          Smart X BlockChain
        </div>
        <div className=" sm:px-[30%] text-primary text-justify font-bold sm:font-normal">
          Join our dynamic networking community: sign up, build your team,
          upgrade packages, and unlock boundless earning potential.
          Embrace a future where connections empower success!
        </div>
      </div>


    </div>
  );
}
