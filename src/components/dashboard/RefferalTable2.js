import axios from "axios";
import React, { useEffect, useState } from "react";
import apiUrl from "../../../redux/services/api";
import jwtDecode from "jwt-decode";

export default function RefferalTable2() {
  const [refferal, setRefferal] = useState(null);
  const [token, settoken] = useState(null);

  const apidata = async () => {
    const user = await localStorage.getItem("user");
    const decode = await jwtDecode(user);
    settoken(decode);
    await axios
      .post("https://api.smartxblockchain.com/showreffusers", {
        refferal: decode.id,
      })
      .then((res) => setRefferal(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    apidata();
  }, []);

  return (
    <div className="table-container py-10">
  <table className="min-w-full">
    <thead className="bg-primary text-texting border-b">
      <tr>
        <th scope="col" className="text-sm font-extrabold text-texting px-6 py-4 text-left">#</th>
        <th scope="col" className="text-sm font-extrabold text-texting px-6 py-4 text-left">User</th>
        <th scope="col" className="text-sm font-extrabold text-texting px-6 py-4 text-left">Pakage</th>
        <th scope="col" className="text-sm font-extrabold text-texting px-6 py-4 text-left">Date</th>
      </tr>
    </thead>

    <tbody className="overflow-y-scroll">
      <tr className="bg-white border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">1</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">1000rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>

      <tr className="bg-white border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">2</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Jacob</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">1000rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
      <tr className="bg-gray-100 border-b">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">3</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">Mark</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">500rs</td>
        <td className="text-sm text-gray-900 font-light px-6 py-4">January 11, 2023</td>
      </tr>
    </tbody>
  </table>
</div>



  );
}
