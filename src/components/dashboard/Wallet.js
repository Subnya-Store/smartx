import React, { useState, useEffect } from "react";
import API from "../../API/API";
import { BsArrowRightShort } from "react-icons/bs";
import { fetchBalance } from "wagmi/actions";
import {  useAccount } from "wagmi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Wallet() {
  const [wallet, setWallet] = useState(0);
  const { address } = useAccount();
  const [balance, setBalance] = useState(0)
  const [Usdt, setUsdt] = useState(0)
  const [show, setshow] = useState(true)
  const [Placements, setPlacements] = useState(0)
  const [Refferals, setRefferals] = useState(0)

  useEffect(() => {
    API.fetchGet("/wallet")
      .then((response) => setWallet(response.data.payment))
      .catch((error) => console.log(error));
    API.fetchGet("/counting")
      .then((response) => (setPlacements(response.data.placements), setRefferals(response.data.Total_Reff)))
      .catch((error) => console.log(error));
  }, []);

  const formatAccountBalance = (balance) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const tokens = async () => {
    const balances = await fetchBalance({
      address
    })
    const usdt = await fetchBalance({
      address,
      token: '0x55d398326f99059fF775485246999027B3197955'
      // token: '0x6175a8471C2122f778445e7E07A164250a19E661'
    })

    // const count=Math.round()

    setBalance(balances.formatted)
    setUsdt(usdt.formatted)
  }

  return (
    <div className="flex flex-col justify-between min-w-[350px] w-[100%] min-h-[140px] rounded-2xl bg-primary">
      <div className="flex flex-col">
        <div className="flex justify-center ">
          <p className="MyFont sm:text-3xl text-xl text-texting hover:text-white hover:cursor-pointer">
            Smart-X-BlockChain
          </p>
        </div>
        <div className="flex w-[100%] h-full">
          <div className="w-[50%] flex flex-col">
            <div className="flex  flex-col justify-between h-full w-[60%]">
              <div className="flex mt-2 text-texting font-extrabold text-lg items-center justify-end ">
                <div >Wallet</div>
                {show ?
                  <div className="" onClick={() => (setshow(!show), tokens())}>
                    <AiFillEye size={20} />
                  </div> :
                  <div className="" onClick={() => (setshow(!show), setBalance(0), setUsdt(0))}>
                    <AiFillEyeInvisible />
                  </div>
                }
              </div>
              <div className="flex flex-col">
                <div className="mx-2 text-texting flex sm:justify-center items-center">
                  <p className="min-w-[45px] sm:text-bas text-lg cursor-pointer hover:text-white">BNB</p>
                  <img className="h-5 w-5 mx-0.5 cursor-pointer" src="images/BNB.png" alt="" />
                  <div className="text-texting sm:text-base text-lg font-bold italic mx-2 cursor-pointer hover:text-white">{balance}</div>
                </div>
                <div className="mx-2 text-texting flex sm:justify-center items-center">
                  <p className="min-w-[45px] cursor-pointer sm:text-base text-lg hover:text-white">USDT</p>
                  <img className="h-6 w-6 cursor-pointer" src="images/USDT.png" alt="" />
                  <div className="text-texting sm:text-base text-lg font-bold italic mx-2 cursor-pointer hover:text-white">{Usdt}</div>
                </div>
              </div>
            </div>

          </div>
          <div className="w-[50%] flex flex-col">
            <div className="flex justify-center sm:text-2xl text-lg font-bold text-texting hover:text-white hover:cursor-pointer ml-[38%] sm:ml-0 my-2 ">Team</div>

            <div className="flex justify-center items-center flex-col ml-5">
              {/* <GiTeamUpgrade className="text-texting ml-[38%] sm:ml-0" size={25} /> */}
              
              <div className="flex text-white text-lg sm:text-base">
                Refferals
                <BsArrowRightShort className="text-texting " size={25} />
                <p className="text-texting font-bold sm:text-base text-lg italic mx-2 cursor-pointer mt- hover:text-white">
                  {Refferals}
                </p>
              </div>

              <div className="flex text-white text-lg sm:text-base">
                Placements
                <BsArrowRightShort className="text-texting " size={25} />
                <p className="text-texting font-bold sm:text-base text-lg italic mx-2 cursor-pointer mt- hover:text-white">
                  {Placements}
                </p>
              </div>
              
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
