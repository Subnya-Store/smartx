import React, { useState } from "react";
import { LockClosedIcon, CheckCircleIcon } from "@heroicons/react/solid";

export default function PlanTest() {
  const [isLocked, setIsLocked] = useState(true);

  const handlePurchase = () => {
    // Purchase logic and actions go here
    // For example, you can make an API call or update the necessary data

    // Once the purchase is completed, unlock the component
    setIsLocked(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        {isLocked ? (
          <LockClosedIcon className="h-12 w-12 text-red-500" />
        ) : (
          <CheckCircleIcon className="h-12 w-12 text-green-500" />
        )}
      </div>

      <h2 className="text-xl font-bold mb-2">
        {isLocked ? "Locked Component" : "Unlocked Component"}
      </h2>
      
      <p className="mb-4">
        {isLocked ? "Purchase to unlock" : "This component is now unlocked!"}
      </p>

      {isLocked && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handlePurchase}
        >
          Purchase
        </button>
      )}
    </div>
  );
}
