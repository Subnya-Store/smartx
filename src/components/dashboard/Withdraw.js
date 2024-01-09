import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch,useSelector } from "react-redux";
import API from "../../API/API";
import { toast } from 'react-toastify';

export default function Withdraw({ setIsModalOpen }) {
  const [amount, setAmount] = useState(0);
  const [transactionFees, setTransactionFees] = useState(0);
  const [WalletAmount, setWalletAmount] = useState(0);
  const [loading, setloading] = useState(false);
  const handleAmountChange = (e) => {
    const amountValue = e.target.value;
    setAmount(amountValue);
    const transactionFeesValue = amountValue * 0.05;
    setTransactionFees(Number(transactionFeesValue.toFixed(2)));
  };
  const totalAmount = +amount + +transactionFees;
  const [state, setState] = useState("Balance");
  const data=useSelector(x=>x)
  const widthdraw=()=>{
    setloading(true),
    API.fetchPost({Withdraw_payment:totalAmount},'/withdraw')
    .then(x=>(
      
      x.data.msg =="You don't have enough amount"||x.data.msg =="Please mention amount"? toast.error(x.data?.msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }):
      (toast.success(x.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),setloading(false))
    ))
    .catch(err=> console.log(err))
  }
  useEffect(() => {
    API.fetchGet('/wallet')
      .then((response) => setWalletAmount(response.data.payment))
      .catch((error) => console.log(error));
  }, []);
  const formatAccountBalance = (balance) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div>
      <div>
        <div className="flex justify-between">
            {state == "Balance" && <div></div>}
        
        {state == "Withdraw" && <div
            onClick={() => setState("Balance")}
            className="text-purple-950 p-4"
          >
            <IoIosArrowBack className="cursor-pointer text-primary" size={25} />
          </div>}
          <div className="flex justify-end text-primary p-4 sm:h-[0%] h-[10%]">
          <AiOutlineClose
            onClick={() => setIsModalOpen(false)}
            className="cursor-pointer text-primary"
            size={25}
          />
        </div>
        </div>
        <div className="flex sm:mx-[10%] mx-[2%] my-5 justify-between">
        
            <div className="flex text-primary">
              Name:
              <p className="mx-2 text-primary font-bold uppercase">{data&&data.username}</p>
            </div>
            <div className="flex text-primary">
              Refferal ID:
              <p className="mx-2 text-primary font-bold">{data&&data.refferalID}</p>
            </div>
          </div>
        {state == "Balance" && <div>
          
          <div className="flex flex-col h-[100%] my-5 ">
            <div className="justify-center flex text-primary font-bold text-2xl">
              Account Balance
            </div>
            <div className="flex justify-center items-center gap-1 my-4 ">
              $
              <div className="text-primary font-bold text-2xl">{WalletAmount&&formatAccountBalance(WalletAmount)}</div>
            </div>
          </div>
          <div className="flex items-end justify-center sm:mb- h-[100%] ">
            <button onClick={()=> setState("Withdraw")} className="p-2 bg-secondary hover:bg-primary rounded-md shadow-xl cursor-pointer transform hover:scale-110 transition ease-in duration-300 hover:font-bold hover:text-texting text-texting sm:hover:border sm:hover:border-primary">
              Withdrawal
            </button>
          </div>
        </div>}
        
        {state == "Withdraw" && <div className="flex flex-col mx-[10%] sm:mx-[20%] h-[100%] my-10  gap-2 ">
        
          <div className="flex justify-between">
            <div className="text-primary">Amount:</div>
            <input
              type="number"
              id="amount"
              name="amount"
              onChange={handleAmountChange}
              value={amount}
              className="p-1 text-primary font-bold w-24  rounded-md shadow-2xl border border-primary text-center focus:outline-primary"
            />
          </div>
          <div className="flex justify-between">
            <div className="text-primary">Transaction Fee (5%)</div>
            <div>
              <input
                type="number"
                id="transaction-fees"
                name="transaction-fees"
                value={transactionFees}
                readOnly
                className="p-1 text-primary font-bold w-24  rounded-md shadow-2xl border border-primary text-center focus:outline-primary"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-primary">Total Withdrawal</div>
            <div>
              <input
                type="number"
                id="total-amount"
                name="total-amount"
                value={totalAmount}
                readOnly
                className="p-1 text-primary font-bold w-24  rounded-md shadow-2xl border border-primary text-center focus:outline-primary"
              />
            </div>
          </div>
          <div className="justify-center flex">
          
          {loading==true?'loading...':<button onClick={()=>widthdraw()} className="p-2 bg-secondary hover:bg-primary rounded-md shadow-xl cursor-pointer transform hover:scale-110 transition ease-in duration-300 hover:font-bold hover:text-texting text-texting sm:hover:border sm:hover:border-primary">
              Withdrawal
            </button>}
          </div>
        </div>}
      </div>
    </div>
  );
}
