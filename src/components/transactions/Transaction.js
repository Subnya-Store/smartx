import React, { useState, useEffect } from "react";
import TransactionHistory from "./TransactionHistory";
import API from "../../API/API";

export default function transaction() {
  const [transac, setTransaction] = useState({})
  const [datas, setdata] = useState('')

  useEffect(() => {
    API.fetchGet("/findTransac")
      .then(x => setTransaction(x.data))
      .catch(err => console.log(err))
  }, [datas])
  useEffect(() => {
    const user = localStorage.getItem("user");
    // const decode = jwt_decode(user);
    setdata(user);
  }, []);
  console.log(transac)
  return (
    <div className="flex flex-col w-[100%] h-screen">
      <div className="bg-primary text-texting rounded-2xl shadow-2xl font-extrabold px-2 py-4 my-2 mx-2 text-[20px]">
        Transactions
      </div>
      <div className="flex flex-row justify-between mx-2">
      </div>

      <div className="h-[90%] overflow-scroll pb-20">
        {
          transac.length > 0 && transac.map((transactions, index) =>
            <div key={index}>
              <TransactionHistory transactions={transactions} />
            </div>
          )
        }
      </div>
    </div>
  );
}
