import React, { useEffect, useState } from "react";
import API from "../../API/API";
import moment from "moment";

export default function UserTime() {
  const [state, setState] = useState({});
  useEffect(() => {
    API.fetchGet("/profile_info")
      .then((x) => setState(x.data))
      .catch((x) => console.log(x));
  }, []);
  return (
    <div className=" grid py-2 gap-2 sm:gap-0 rounded-2xl grid-cols-4 sm:grid-cols-8 w-[100%] bg-red-0">
      <div className="col-span-2 flex justify-between items-center flex-col border-white border bg-slate-50 rounded-lg min-h-[75px]">
        <p className="text-sm text-white rounded-t-lg p-1 bg-primary flex justify-center w-full">
          Total Income
        </p>
        <p className="text-sm text-secondary mb-4 font-extrabold">
          ${state.total_income && state.total_income}
        </p>
      </div>
      <div className="col-span-2 flex justify-between items-center flex-col  border-white border bg-slate-50 rounded-lg min-h-[75px]">
        <p className="text-sm text-white rounded-t-lg p-1 bg-primary flex justify-center w-full">
          Total Withdrawal
        </p>
        <p className="text-sm text-secondary mb-4 font-extrabold">
          ${state.total_income && state.total_income}
        </p>
      </div>
      <div className="col-span-2 flex justify-between items-center flex-col  border-white border bg-slate-50 rounded-lg min-h-[75px]">
        <p className="text-sm text-white rounded-t-lg p-1 bg-primary flex justify-center w-full">
          Date Registered
        </p>
        <p className="text-sm text-secondary  font-bold">
          {state.date_register &&
            moment(state.date_register).format("MMMM Do YYYY")}
        </p>
        <p className="text-sm text-secondary font-bold">
          {state.date_register &&
            moment(state.date_register).format("h:mm:ss a")}
        </p>
      </div>
      <div className="col-span-2 flex justify-between items-center flex-col  border-white border bg-slate-50 rounded-lg min-h-[75px]">
        <p className="text-sm text-white rounded-t-lg p-1 bg-primary flex justify-center w-full">
          Last Withdrawal
        </p>
        <p className="text-sm text-secondary  font-bold">
          {state.Last_withdraw_time &&
            moment(state.Last_withdraw_time).format("MMMM Do YYYY")}
        </p>
        <p className="text-sm text-secondary  font-bold">
          {state.Last_withdraw_time &&
            moment(state.Last_withdraw_time).format("h:mm:ss a")}
        </p>
      </div>
    </div>
  );
}
