import React from "react";

export default function Howitworks3() {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col-reverse md:flex-row p- bg1-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">
      <div
        data-aos="zoom-in-up"
        className="w-[100%] flex justify-center items-center flex-col sm:px-[10%]"
      >
        <div className="flex justify-center my-3 sm:my-0 items-center text-primary font-extrabold text-3xl underline cursor-pointer">
          Decentralized
        </div>
        <div className="text-primary sm:my-2 text-justify font-bold sm:font-normal">
          Welcome to our cutting-edge Networking platform, where the world of
          BlockChain Technology and Decentralized Governance converge. Join us
          to connect, collaborate, and stay ahead in the rapidly evolving
          landscape of BlockChain innovation. Together, we're shaping the future
          of Decentralized possibilities!
        </div>
      </div>

      <div
        data-aos="zoom-in-left"
        className="w-[30%] flex flex-col justify-center items-center"
      >
        <div className="flex justify-start w-[170%] sm:w-[100%] sm:justify-center items-center ">
          <img
            className="sm:w-[90%] sm:h-[90%] "
            src="images/BLOCKCHAIN1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
