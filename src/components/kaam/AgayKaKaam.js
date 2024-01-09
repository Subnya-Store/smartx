import React, { useCallback, useEffect, memo } from 'react'
import { erc20ABI, useContractWrite, useWaitForTransactionReceipt, useContractEvent } from 'wagmi';
import Decode from 'jwt-decode'
import abi from '../../Data/Abis.json'
import API from '../../API/API';

import { createPublicClient, http } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

export const publicClient = createPublicClient({
    chain: sepolia,
    transport: http()
})


export default function AgayKaKaam({
    walletClient,
    Eth_value,
    setNextStep,
    Values,
    setValues,
    setIsModalOpen2,
    setIsModalOpen,
    setpakages,
    setLoading,
    setmsg,
    Runing,
    REFFERAL,
    PLACEMENT
}) {

    let user_

    const user = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
    user_ = Decode(user)


    const PackagePurchase = () => {
        console.log("PackagePurchase START", "<====")
        API.fetchPost({ pkg: Values, user_id: user_.id }, '/purchase_package')
            .then(x => {
                setLoading(false)
                setValues(null)
                console.log("Should purchase now!!")
                setmsg(x.data.msg), setIsModalOpen2(false), x.data.msg &&
                    API.fetchGet('/finduserpakage')
                        .then(x => setpakages(x.data.packages))
                        .catch(err => console.log(err))
                setIsModalOpen(false);
            })
    }


    const { data: data_Purchase, isLoading: isLoading_Deposite, isSuccess: isSuccess_deposite, write: placement, status } = useContractWrite({
        address: "0xBfACF0f2e9eEf24c563A984b9d3d967bA51096d5",
        abi,
        walletClient,
        functionName: 'placement',
        args: [
            // "0x8312e6CB6356df27650d0a7eca605be827A2E358", //direct
            // "0x8312e6CB6356df27650d0a7eca605be827A2E358", //placement
            REFFERAL, //direct
            PLACEMENT, //placement
            Eth_value + "000000000000000000"
        ],
        onSuccess: async (items) => {
            console.log(items, '<==')
            // purchase = true
            const transaction = await publicClient.waitForTransactionReceipt(
                { hash: items.hash }
            )
            if (transaction.logs[0].blockNumber) {
                setNextStep(true)
                // PackagePurchase()
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
            Eth_value + "000000000000000000"
        ],
        onSuccess: async (items) => {
            console.log(items, '<==')
            // purchase = true
            const transaction = await publicClient.waitForTransactionReceipt(
                { hash: items.hash }
            )
            if (transaction.logs[0]?.blockNumber != null) {
                placement()
            }
            console.log(transaction)
        }
    })
    // const { data: data_Purchase, isLoading: isLoading_Deposite, isSuccess: isSuccess_deposite, write: placement, status } = useContractWrite({

    //     address: "0x9f283f4d132334085ca67f207cebe0AC868c1cf1",
    //     abi,
    //     walletClient,
    //     functionName: 'placement',
    //     args: [
    //         "0x8312e6CB6356df27650d0a7eca605be827A2E358", //direct
    //         "0x8312e6CB6356df27650d0a7eca605be827A2E358", //placement
    //         Eth_value + "000000"
    //     ],
    //     onSuccess: async (items) => {
    //         console.log(items, '<==')
    //         // purchase = true
    //         const transaction = await publicClient.waitForTransactionReceipt(
    //             { hash: items.hash }
    //         )
    //         if (transaction.logs[0].blockNumber) {
    //             setNextStep(true)
    //             // PackagePurchase()
    //         }
    //         console.log(transaction)
    //     }
    // })

    // const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
    //     address: "0x3B6467B7C935272Ff304C4692E12cd157d0E641D",
    //     abi: erc20ABI,
    //     walletClient: walletClient,
    //     functionName: 'approve',
    //     args: [
    //         "0x9f283f4d132334085ca67f207cebe0AC868c1cf1", //spender contract address
    //         Eth_value + "000000"
    //     ],
    //     onSuccess: async (items) => {
    //         console.log(items, '<==')
    //         // purchase = true
    //         const transaction = await publicClient.waitForTransactionReceipt(
    //             { hash: items.hash }
    //         )
    //         if (transaction.logs[0]?.blockNumber != null) {
    //             placement()
    //         }
    //         console.log(transaction)
    //     }
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


    useContractEvent({
        address: '0xBfACF0f2e9eEf24c563A984b9d3d967bA51096d5',
        abi,
        eventName: 'placementDetaill',
        listener(log) {
            // console.log(log[0].args.amount1, '<==== this is event !!')
            if (log[0].args.amount1 > 0) {
                PackagePurchase()
            }
        },
    })
    // useContractEvent({
    //     address: '0x9f283f4d132334085ca67f207cebe0AC868c1cf1',
    //     abi,
    //     eventName: 'placementDetaill',
    //     listener(log) {

    //         if (log[0].args.amount1 > 0) {
    //             PackagePurchase()
    //         }
    //     },
    // })

    return (
        <>hi</>
    );
}