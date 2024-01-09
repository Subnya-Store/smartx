import React from "react";
import Sidebar from "../src/components/dashboard/Sidebar";
import SidebarMobile from "../src/components/dashboard/SidebarMobile";
import Transaction from "../src/components/transactions/Transaction";

export default function transactions() {
  return (
    <div className="flex">
      <Sidebar/>
      <SidebarMobile/>
      <Transaction />
    </div>
  );
}
