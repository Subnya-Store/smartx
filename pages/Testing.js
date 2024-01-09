import React, { useEffect, useRef, useState } from "react";
  import { ConnectButton } from "@rainbow-me/rainbowkit";
  import { useWalletClient, useAccount, usePublicClient, erc20ABI, usePrepareContractWrite, useContractWrite } from "wagmi";
  import { getContract, waitForTransaction, fetchBalance, fetchToken, PrepareWriteContractConfig } from "wagmi/actions";
import { useRouter } from "next/router";
import abi from '../src/Data/Abis.json'
import { parseEther } from "viem";


export default function Testing() {


  // console.log("Data",abi)

  const ContractAddress = "0x85c3E7C1F0dD6793dC216676C4F1041DeF443CdC";
  const { data: walletClient } = useWalletClient();
  const [balance, setBalance] = useState('null')
  const [Usdt, setUsdt] = useState('null')
  const [_amount, set_amount] = useState(0)
  const { address, isConnected } = useAccount();

  const tokens = async () => {
    const balances = await fetchBalance({
      address
    })
    const usdt = await fetchBalance({
      address,
      token: '0x55d398326f99059fF775485246999027B3197955'
    })
    setBalance(balances.formatted)
    setUsdt(usdt.formatted)
  }

  const { data: data_Deposite, isLoading: isLoading_Deposite, isSuccess: isSuccess_deposite, write: palcement } = useContractWrite({

    address: "0x437c691137bBf6393e967eD711a3C31726b49CC8",
    abi: abi,
    walletClient,
    functionName: 'palcement',
    args: [
      "0x6cE7bEB02ba0cCebaB4d50832e49b2116e31b4A8", //direct
      "0x914fed022fE426Fdb82C5D4F445eb4aAC3795c8A", //placement
      parseEther("10.5")
    ]
  
  }
  )
  // console.log("HI")

  const { data: withdraw_data, isLoading: isLoading_withdraw, isSuccess: isSuccess_withdraw, write: upgrades } = useContractWrite({
    address: "0x437c691137bBf6393e967eD711a3C31726b49CC8",
    abi:abi ,
    walletClient,
    functionName: 'upgrades',
    args: [
      "0x914fed022fE426Fdb82C5D4F445eb4aAC3795c8A", //direct
      "0x752D9E59909D5B2dD13c1639A0FE795580AEcdc2", //placement
      parseEther("10.5")
    ]
  })

  const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
    address: "0x60576DCD29C7b9Fc430e52CA4e96f81F0e4eAa22",
    abi: erc20ABI,
    walletClient,
    functionName: 'approve',
    args: [
      "0x437c691137bBf6393e967eD711a3C31726b49CC8", //spender contract address
      parseEther("10.5") //amount of tokens to approve
    ]
  })

  const palcements = async () => {
    await palcement();
  };
  const upgradess = async () => {
    await upgrades();
  };
  const Approves = async () => {
    await Approve();
  };

  return (
    <>
      <ConnectButton />
      {/* <p>wallet address:{address && address}</p> */}
      <button onClick={tokens}>press for tokens</button>
      <div>BNB:{balance}</div>
      <div>USDT:{Usdt}</div>
      <div><button onClick={palcements}>placement</button></div>
      <div><button onClick={upgradess}>upgrades</button></div>
      <div><button onClick={Approves}>Approves</button></div>
      {/* <button onClick={withdraw}>withdraw</button> */}
      <input type="text" onChange={(e)=>set_amount(e.target.value)} placeholder="Amount"/>
    </>
  );
}