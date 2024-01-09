import React from "react";
import moment from "moment";

export default function TransactionHistory({transactions}) {
  return (
    <div>
      <div>
        {/* <div className="flex items-center justify-center">
          <div className="px-2 w-[65%] md:w-[15%] text-primary">
            Sat, 21 Jan 2023
          </div>
          <div className="border-b border-primary mx-4 w-full"></div>
        </div> */}
        <div className="mx-2 bg-primary rounded-2xl shadow-xl px-4">
          <div className="flex flex-row justify-between my-2 items-center roun">
            <div>
              <div className="text-sm text-texting uppercase font-light flex justify-between">
                {transactions.reason}---<p className="">{moment(transactions.createdAt).format('llll')}</p>
              </div>
              {/* <div className="text-primary text-[18px]">{}</div> */}
            </div>
            <div>
              <div className="flex flex-row justify-between items-center">
                <img src="images/USDT.png" className="w-6 h-6 mt-1 flex justify-center items-center" />
                <div className="mx-2 text-texting  text-[16px]">{transactions.payment}</div>
              </div>
              {/* <div className="flex justify-end mx-2 text-secondary  font-light text-sm">
                22.00
              </div> */}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
