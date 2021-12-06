/* eslint-disable @next/next/no-html-link-for-pages */
import Select from "@/components/select/select";
import React, { FunctionComponent } from "react";


const CreateCommunity: FunctionComponent = () => {
  const tokenOptions = ["BOLIT", "USDT", "BTC"];
  return (
    <div className="p-2 overflow-hidden  bg-gray-100 rounded-xl  shadow duration-300 hover:bg-white hover:shadow-xl">
      <div className="m-4 w-auto">
      <label className="block text-gray-700 text-base font-bold mb-2">
        Community Name
      </label>
      <input className="text-base shadow appearance-none rounded-3xl border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
    </div>
    <div className="mx-4 border-transparent	">
      <label className="block text-gray-700 text-base font-bold mb-2">
        Description
      </label>
      <textarea className=" text-base shadow appearance-none rounded-xl   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"/>
    </div>

    <div className="m-4">
    <label className="block text-gray-700 text-base font-bold mb-2">
        Type
      </label>
    <Select  options={tokenOptions} />
    </div>
    </div>
  );
};

export default CreateCommunity;
