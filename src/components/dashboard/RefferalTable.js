import axios from "axios";
import React, { useEffect, useState } from "react";
import apiUrl from "../../../redux/services/api";
import moment from "moment/moment";
import Api from '../../API/API'

export default function RefferalTable() {
  const [refferal, setRefferal] = useState(null);
  const [token, settoken] = useState(null);

  const apidata = async () => {
    Api.fetchGet("/find_Direct_Reff_Transactions")
      .then((res) => { setRefferal(res.data) })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    apidata();
  }, []);
  return (
    <div className="flex flex-col h-auto mt-0  sm:m-0">
      <div className="overflow-x-auto ">
        <div className="py-2 inline-block min-w-full ">
          <div className="overflow-x-scroll sm:overflow-auto  rounded-2xl ">
            <table className="min-w-full">
              <thead className="bg-primary text-texting border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-extrabold text-texting  px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-extrabold text-texting  px-6 py-4 text-left"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-extrabold text-texting  px-6 py-4 text-left"
                  >
                    Package
                  </th>
                  <th
                    scope="col"
                    className="text-sm h- font-extrabold text-texting  px-6 py-4 text-left"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              {/* <div className="bg-blue-400 h-2"></div> */}
              <tbody>

                {refferal?.length > 0 &&
                  refferal.reverse().map((x, i) => (
                    <tr key={i} className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {x.user_id}
                      </td>
                      <td className="text-sm text-gray-900 uppercase font-light px-6 py-4 whitespace-nowrap">
                        {x.find_Direct_Reff_Transactions.username}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {x.pkg == null ? "Not Available" : "$" + x.pkg}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {moment(x.createdAt).format('LLLL')}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
