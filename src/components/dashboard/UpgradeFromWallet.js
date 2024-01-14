import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";
import Api from "../../API/API";
import { useDispatch } from "react-redux";
import { useWalletClient, useAccount, usePublicClient, erc20ABI, usePrepareContractWrite, useContractWrite, useWaitForTransaction, useContractEvent } from "wagmi";
import { useRouter } from "next/router";
import abi from '../../Data/Abis.json'
import { parseEther } from "viem";
import API from "../../API/API";
import UpgradeKaKaam from "../kaam/UpgradeKaKaam";
import AgayKaKaam from "../kaam/AgayKaKaam";
import { Decode } from "../../utility";

export default function UpgradeFromWallet({
  isModalOpen,
  onValue,
  setIsModalOpen,
  pkgname,
  value,
  setBIGRefresh,
  BIGRefresh,
  setLoading
}) {
  const [NextPrice, setNextPrice] = useState("");
  const [currentLevel, setcurrentLevel] = useState("");
  const [Current_pkg, setCurrent_pkg] = useState("");
  const [Refresh, setRefresh] = useState("");
  // const [BIGRefresh, setBIGRefresh] = useState(false);
  const [PLACEMENT, setPLACEMENT] = useState("");
  const [REFFERAL, setREFFERAL] = useState("");
  const [Values, setValues] = useState(0);
  const [NextStep, setNextStep] = useState(false);
  const [NextStep_okay, setNextStep_okay] = useState(false);
  let user_

  const user = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
  user_ = Decode(user)


  const test = async (e) => {
    // e.preventDefault()
    await API.fetchPost({ pkg: value.pkg_price, user_id: user_.id }, '/user_on_upgrade')
      .then(x => (
        setPLACEMENT(x.data.placement),
        setREFFERAL(x.data.Direct_reff)
      ))
      .catch(x => console.log(x, '<== Purchase price'))
  }
  useEffect((e) => {
    test()
  }, [])

  const { data: walletClient } = useWalletClient();
  const dispatch = useDispatch();

  useEffect(() => {
    pkgInfo();
  }, [Refresh]);




  const Eth_value = `${NextPrice}`


  // const { data: upgradex, isLoading: isLoading_withdraw, isSuccess: isSuccess_withdraw, write: upgradesx } = useContractWrite({
  //   address: "0xBfACF0f2e9eEf24c563A984b9d3d967bA51096d5",
  //   abi,
  //   walletClient,
  //   functionName: 'upgrades',
  //   args: [
  //     // "0x556499eda344C4E27c793f7249339f3FAf12Bc2C", //direct
  //     // "0x556499eda344C4E27c793f7249339f3FAf12Bc2C", //placement
  //     REFFERAL, //direct
  //     PLACEMENT, //placement
  //     parseEther(Eth_value)
  //   ],
  //   onSuccess: () => setNextStep(true)
  // })

  // const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
  //   address: "0x55d398326f99059fF775485246999027B3197955",
  //   abi: erc20ABI,
  //   walletClient,
  //   functionName: 'approve',
  //   args: [
  //     "0xBfACF0f2e9eEf24c563A984b9d3d967bA51096d5", //spender contract address
  //     parseEther(Eth_value) //amount of tokens to approve
  //   ]
  // })


  // const { data: upgradex, isLoading: isLoading_withdraw, isSuccess: isSuccess_withdraw, write: upgradesx } = useContractWrite({
  //   address: "0x9f283f4d132334085ca67f207cebe0AC868c1cf1",
  //   abi,
  //   walletClient,
  //   functionName: 'upgrades',
  //   args: [
  //     "0x8312e6CB6356df27650d0a7eca605be827A2E358", //direct
  //     "0x8312e6CB6356df27650d0a7eca605be827A2E358", //placement
  //     22000000
  //   ],
  //   onSuccess: () => setNextStep(true)
  // })


  // const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
  //   address: "0x3B6467B7C935272Ff304C4692E12cd157d0E641D",
  //   abi: erc20ABI,
  //   walletClient,
  //   functionName: 'approve',
  //   args: [
  //     "0x9f283f4d132334085ca67f207cebe0AC868c1cf1", //spender contract address
  //     22000000 //amount of tokens to approve
  //   ]
  // })



  // const Procedure = () => {
  //   setNextStep(false)
  //   setNextStep_okay(false)
  //   setLoading(false)
  //   Upgrade_pkg()
  // }
  // useEffect(() => {
  //   NextStep == true && Procedure()
  // }, [USDT_Transaction_upgrade])
  // console.log({NextStep_okay:true , NextStep:true , USDT_Transaction_upgrade:true})

  // const place_ = async () => await upgradesx()


  // useEffect(() => {
  //   BIGRefresh && place_()
  // }, [USDT_Transaction])


  // useContractEvent({
  //   address: '0x66B0246d1d813722D052cBCBEF82d1AB2017E7aF',
  //   abi,
  //   eventName: 'upgradeDetaill',
  //   listener(log) {
  //     console.log(log, '<==== this is event !!')
  //     if (log[0].args.amount1 > 0) {
  //       // PackagePurchase()
  //       // setNextStep_okay(true)
  //     }
  //   },
  // })
  // useContractEvent({
  //   address: '0xBfACF0f2e9eEf24c563A984b9d3d967bA51096d5',
  //   abi,
  //   eventName: 'upgradeDetaill',
  //   listener(log) {
  //     console.log(log, '<==== this is event !!')
  //     if (log[0].args.amount1 > 0) {
  //       // PackagePurchase()
  //       setNextStep_okay(true)
  //     }
  //   },
  // })

  // useEffect(() => {
  //   NextStep_okay && setBIGRefresh(true)
  // }, [isLoading_approve])

  // useEffect(() => {
  //   // place_()
  //   setTimeout(() => {
  //     setBIGRefresh(false)
  //   }, 2000); // 2000 milliseconds = 2 seconds
  // }, [USDT_Transaction_upgrade])


  const pkgInfo = () => {
    Api.fetchPost({ pkg: value.pkg_price }, "/Pakage_info")
      .then((x) => {
        setNextPrice(x.data.NextPackage, "<== next pkg price");
        setcurrentLevel(x.data.findUpdate.level, "<== current level");
        setCurrent_pkg(x.data.findUpdate.pkg_price, "<== current pakage price");
        setRefresh(x.data.NextPackage);
        // console.log(x.data,'<===')
      })
      .catch((err) => console.log(err));
  };
  let start = false;

  const Approves = async () => {
    setBIGRefresh(true)
    start = true
    // setLoading(true)
    // await Approve();
  };

  const pkg_Upgrade = [
    {
      pkg_price: 10,
      upgrades: [
        { level: 12.5 },
        { level: 28.125 },
        { level: 63.281 },
        { level: 142.383 },
        { level: 320.361 },
        { level: 720.813 },
        { level: 1621.829 },
        { level: 3649.116 },
      ]
    },
    {
      pkg_price: 20,
      upgrades: [
        { level: 25 },
        { level: 56.25 },
        { level: 126.563 },
        { level: 284.766 },
        { level: 640.723 },
        { level: 1441.626 },
        { level: 3243.658 },
        { level: 7298.232 },
      ]
    },
    {
      pkg_price: 50,
      upgrades: [
        { level: 62.5 },
        { level: 140.625 },
        { level: 316.406 },
        { level: 711.914 },
        { level: 1601.807 },
        { level: 3604.065 },
        { level: 8109.146 },
        { level: 18245.579 },
      ]
    },
    {
      pkg_price: 100,
      upgrades: [
        { level: 125 },
        { level: 281.250 },
        { level: 632.813 },
        { level: 1423.828 },
        { level: 3203.613 },
        { level: 7208.130 },
        { level: 16218.292 },
        { level: 36491.158 },
      ]
    },
    {
      pkg_price: 200,
      upgrades: [
        { level: 250 },
        { level: 562.5 },
        { level: 1265.625 },
        { level: 2847.656 },
        { level: 6407.227 },
        { level: 14416.260 },
        { level: 32436.584 },
        { level: 72982.315 },
      ]
    },
    {
      pkg_price: 350,
      upgrades: [
        { level: 437.5 },
        { level: 984.375 },
        { level: 2214.844 },
        { level: 4983.398 },
        { level: 11212.646 },
        { level: 25228.455 },
        { level: 56764.023 },
        { level: 127719.051 },
      ]
    },
  ]
  const levels = [1, 2, 3, 4, 5, 6, 7, 8]
  let upgrade_array
  upgrade_array = pkg_Upgrade?.find(x => x.pkg_price == value.pkg_price)?.upgrades

  const pkg_name = ["Basic", "Standard", "Pro", "Royal", "Gold", "King"];

  let Runing = true
  
  return (
    <div className="rounded-4xl">
      {BIGRefresh === true && <UpgradeKaKaam
        setBIGRefresh={setBIGRefresh}
        user_={user_}
        Runing={Runing}
        Value={value}
        setValues={setValues}
        setRefresh={setRefresh}
        walletClient={walletClient}
        Eth_value={Eth_value}
        REFFERAL={REFFERAL}
        PLACEMENT={PLACEMENT}
      />}
      <div className="flex rounded-3xl bg-primary items-center">
        <div className="w-[100%]  mx-5 py-4">
          <div className="flex justify-between text-texting">
            {/* <button onClick={pkgInfo}>pkg info</button> */}
            <p>Your Current Package is</p>
            <div className="border-2 rounded-lg text-texting min-w-[100px] font-bold cursor-pointer px-2 transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 flex justify-center items-center">
              {Current_pkg || pkg_name[onValue]}
            </div>
          </div>
          <div className="flex justify-between text-texting my-2 ">
            <p>Your Package Upgrade Level is</p>
            <div className="border-2 rounded-lg text-texting min-w-[100px] font-bold cursor-pointer transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 flex justify-center items-center ">
              Level-{currentLevel || value.level}
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer flex items-center text-texting"
          onClick={() => setIsModalOpen(false)}
        >
          <AiOutlineClose size={25} />
        </div>
      </div>

      <div className="w-[100%] justify-between h-[400px]  bg-slate-100 my-2 rounded-4xl shadow-lg shadow-primary flex flex-col">
        <div className="text-center text-primary sm:text-xl text-sm my-2">
          Upgrade your package to the Next level
        </div>
        <div className="w-[100%] flex">
          <div className="w-[50%] flex justify-center">
            <div className="flex flex-col gap-0.5">
              <p className="bg-primary text-texting text-sm sm:text-base p-1 rounded-md flex justify-center cursor-pointer">
                Levels
              </p>
              {
                levels.map((x, i) => (
                  <p key={i} className={`flex ${x == value.level ? 'bg-primary text-texting' : 'text-primary'}  justify-center border border-primary  rounded-md cursor-pointer px-2 min-w-[100px]`}>
                    {x}
                  </p>
                ))
              }
            </div>
          </div>
          <div className="w-[50%] flex justify-center">
            <div className="flex flex-col gap-0.5">
              <p className="bg-primary text-texting text-sm sm:text-base p-1 rounded-md flex justify-center cursor-pointer">
                Amount
              </p>
              {
                upgrade_array?.map((x, i) => (
                  <p key={i} onClick={() => console.log(x)} className={`flex ${x.level == value.upgrade ? 'bg-primary text-texting' : 'text-primary'} justify-center border border-primary rounded-md cursor-pointer px-2 min-w-[100px]`}>
                    {x.level}
                  </p>
                ))
              }

            </div>
          </div>
        </div>
        {currentLevel != 8 && PLACEMENT != null && REFFERAL != null && user_?.id && (
          <div className="flex justify-center items-center">
            {BIGRefresh ? <AiOutlineLoading3Quarters color="red" size={30} className="animate-spin" /> :
              <button
                onClick={() => (Approves(), setValues(value.pkg_price))}
                className="bg-primary text-texting p-2 rounded-2xl transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 my-5 py-4"
              >
                Upgrade to Level-
                {currentLevel < 8 ? currentLevel + 1 : currentLevel} <br /> (
                {NextPrice} USDT)
              </button>}
          </div>
        )
        }
        {
          currentLevel == 8 && (
            <div className="flex justify-center items-center">
              <button className="bg-primary text-texting p-2 rounded-2xl transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 my-5 py-4">
                Upgrade Complete !
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}
