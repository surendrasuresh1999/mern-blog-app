import React from "react";
import noConnectionImage from "../assets/connectionLost.png";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

const ConnectionLost = () => {
  return (
    <div className="flex items-center flex-col justify-center space-y-4">
      <img
        src={noConnectionImage}
        alt="internet-lost"
        className="h-52 w-auto"
      />
      <h1 className="text-gray-900 font-700 text-16size sm:text-24size tracking-wide">
        Something went wrong, please try again later
      </h1>
      <button
        onClick={() => window.location.reload()}
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <ArrowPathIcon className="h-4 w-4 text-white" />
        Refresh
      </button>
    </div>
  );
};

export default ConnectionLost;
