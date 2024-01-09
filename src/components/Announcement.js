import React from "react";
import { GrAnnounce } from "react-icons/gr";
import NewsTicker from "./NewsTicker";

export default function Announcement() {
  return (
    <div className="flex mt-2 lg:mt-1">
      <div className="mt-[12px]">
        {/* <GrAnnounce color="red" size={35} /> */}
      </div>
      <NewsTicker />
    </div>
  );
}
