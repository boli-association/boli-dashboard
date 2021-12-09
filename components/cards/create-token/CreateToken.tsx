/* eslint-disable @next/next/no-html-link-for-pages */
import Select from "@/components/select/select";
import React, { FunctionComponent } from "react";


const CreateToken: FunctionComponent = () => {
    const tokenOptions = ["BOLIT", "USDT", "BTC"];
    return (
        <div className="h-44  p-2 overflow-hidden  bg-gray-100 rounded-xl flex flex-col  shadow duration-300">
            <div className="flex  items-center justify-between gap-x-4">
                <div className="">
                    <label className="block text-gray-700 text-base font-bold m-2">
                        Pegged to
                    </label>
                    <Select options={tokenOptions} />
                    <label className="block mt-4 text-gray-700 text-base font-bold m-2">
                        Code
                    </label>
                    <input className="text-base w-72  mt-1 p-1" type="text" />
                </div>

                <div className="w-96">
                    <label className="block text-gray-700 text-base font-bold m-2">
                        Name
                    </label>
                    <input className="text-base w-72 mt-0 px-2 py-1" type="text" />

                    <label className="block mt-4 text-gray-700 text-base font-bold m-2">
                        Supply
                    </label>
                    <input className="text-base w-72 mt-1 px-2 py-1" type="text" />

                </div>
            </div>
        </div>
    );
};

export default CreateToken;
