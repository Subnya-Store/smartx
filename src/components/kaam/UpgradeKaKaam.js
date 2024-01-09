import React, { useCallback, useEffect, memo } from 'react'
import { erc20ABI, useContractWrite, useWaitForTransactionReceipt, useContractEvent } from 'wagmi';
import Decode from 'jwt-decode'
import abi from '../../Data/Abis.json'
import API from '../../API/API';
import { parseEther } from "viem";
import { createPublicClient, http } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http()
})


export default function UpgradeKaKaam({
  Runing,
  Value,
  setValues,
  setRefresh,
  walletClient,
  user_,
  setBIGRefresh,
  Eth_value,
  REFFERAL,
  PLACEMENT
}) {

  console.log('chalra hay==>', { Value, user_ })
  const Upgrade_pkg = () => {
    API.fetchPost(
      {
        pkg: Value.pkg_price,
        user_id: user_.id
      },
      "/upgrade"
    )
      .then(
        (x) => (
          setValues(null),
          setRefresh(x.data)
        )
      )
      .catch((err) => console.log(err));
  };


  const { data: upgradex, isLoading: isLoading_withdraw, isSuccess: isSuccess_withdraw, write: upgradesx } = useContractWrite({
    address: "0xBfACF0f2e9eEf24c563A984b9d3d967bA51096d5",
    abi,
    walletClient,
    functionName: 'upgrades',
    args: [
      // "0x556499eda344C4E27c793f7249339f3FAf12Bc2C", //direct
      // "0x556499eda344C4E27c793f7249339f3FAf12Bc2C", //placement
      REFFERAL, //direct
      PLACEMENT, //placement
      parseEther(Eth_value)
    ],
    onSuccess: async (items) => {
      const transaction = await publicClient.waitForTransactionReceipt(
        { hash: items.hash }
      )
      if (transaction.logs[0]?.blockNumber != null) {
        // ()
        console.log('pohunch gaye')

      }
      console.log(transaction)
    }
  })


  const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
    address: "0x55d398326f99059fF775485246999027B3197955",
    abi: erc20ABI,
    walletClient,
    functionName: 'approve',
    args: [
      "0xBfACF0f2e9eEf24c563A984b9d3d967bA51096d5", //spender contract address
      parseEther(Eth_value) //amount of tokens to approve
    ],
    onSuccess: async (items) => {
      console.log(items, '<==')
      // purchase = true
      const transaction = await publicClient.waitForTransactionReceipt(
        { hash: items.hash }
      )
      if (transaction.logs[0]?.blockNumber != null) {
        upgradesx()
      }
      console.log(transaction)
    }
  })

  // const { data: upgradex, isLoading: isLoading_withdraw, isSuccess: isSuccess_withdraw, write: upgradesx } = useContractWrite({
  //   address: "0x9f283f4d132334085ca67f207cebe0AC868c1cf1",
  //   abi,
  //   walletClient,
  //   functionName: 'upgrades',
  //   args: [
  //     "0x8312e6CB6356df27650d0a7eca605be827A2E358", //direct
  //     "0x8312e6CB6356df27650d0a7eca605be827A2E358", //placement
  //     20000000
  //   ],
  //   onSuccess: async (items) => {
  //     const transaction = await publicClient.waitForTransactionReceipt(
  //       { hash: items.hash }
  //     )
  //     if (transaction.logs[0]?.blockNumber != null) {
  //       // ()
  //       console.log('pohunch gaye')

  //     }
  //     console.log(transaction)
  //   }
  // })


  // const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
  //   address: "0x3B6467B7C935272Ff304C4692E12cd157d0E641D",
  //   abi: erc20ABI,
  //   walletClient,
  //   functionName: 'approve',
  //   args: [
  //     "0x9f283f4d132334085ca67f207cebe0AC868c1cf1", //spender contract address
  //     22000000 //amount of tokens to approve
  //   ],
  //   onSuccess: async (items) => {
  //     console.log(items, '<==')
  //     // purchase = true
  //     const transaction = await publicClient.waitForTransactionReceipt(
  //       { hash: items.hash }
  //     )
  //     if (transaction.logs[0]?.blockNumber != null) {
  //       upgradesx()
  //     }
  //     console.log(transaction)
  //   }
  // })



  const run = async () => {
    await Approve();
  }

  useEffect(() => {
    if (Runing === true) {
      run();
      console.log(' run();<=============')
      Runing = false
    }
  }, []); // Provide an empty dependency array


  // useContractEvent({
  //   address: '0x9f283f4d132334085ca67f207cebe0AC868c1cf1',
  //   abi,
  //   eventName: 'upgradeDetaill',
  //   listener(log) {
  //     console.log(log, '<==== this is event !!')
  //     if (log[0].args.amount1 > 0) {
  //       Upgrade_pkg()
  //       setBIGRefresh(false)
  //     }
  //   },
  // })

  useContractEvent({
    address: '0xBfACF0f2e9eEf24c563A984b9d3d967bA51096d5',
    abi,
    eventName: 'upgradeDetaill',
    listener(log) {
      console.log(log, '<==== this is event !!')
      if (log[0].args.amount1 > 0) {
        Upgrade_pkg()
        setBIGRefresh(false)
      }
    },
  })

  return (
    <>hi</>
  );
}