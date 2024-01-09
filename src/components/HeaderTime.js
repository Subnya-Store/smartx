import moment from "moment/moment";
import React from "react";

export default function HeaderTime() {
  return (
    <div className="bg-body">
      <div className="pb-2 text-texting">
        {moment().format('LLLL')}
      </div>
    </div>
  );
}