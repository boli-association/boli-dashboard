import React, { FunctionComponent, useRef } from "react";
import Layout from "@/components/layout/Layout";
import LineChart from "@/components/chart/LineChart";

const tokenOptions = ["BOLIT", "USDT", "BTC"];

const Swap: FunctionComponent = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-x-4">
        <Card>
          <h4>Boli Credit Price</h4>
          <div className="flex gap-x-4 mt-2 mb-4 justify-between">
            <h5>0.01847 UST</h5>
            <h5 className="text-custom-green-light text-right">
              ▲ 0.356115 (+0.68%)
            </h5>
          </div>
          <LineChart strokeColor="#87c7e3" />
        </Card>
        <Card>
          <h4>Boli Exchange Rate</h4>
          <CustomSelect options={tokenOptions} />

          <div className="flex items-center gap-x-3 mt-3 justify-between">
            <div className="w-1/2">
              <h3>1 BOLIT =</h3>
              <h4>0.018979 UST</h4>
            </div>
            <div className="w-1/2">
              <h4 className="text-custom-green-light text-right">
                ▲ 0.356115 (+0.68%)
              </h4>
            </div>
          </div>
        </Card>
      </div>

      <h2 className="mt-10 mb-5">Swap Coins</h2>
      <div>
        <Card>
          <div className="flex w-full items-center justify-between gap-x-4">
            <div className="w-1/2">
              <CustomSelect options={tokenOptions} />
              <input className="mt-4" type="text" />
            </div>

            <div className="order-3 w-1/2">
              <CustomSelect options={tokenOptions} />
              <input className="mt-4" type="text" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 order-2 text-border-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Swap;

const Card = ({ children }) => (
  <div className="bg-white px-7 py-5 rounded-xl">{children}</div>
);

const CustomSelect = ({ options }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  return (
    <div
      onClick={() => selectRef.current.focus()}
      className="rounded-full border border-border-primary relative px-4 mt-2 flex items-center justify-between"
    >
      <div className="transform pointer-events-none rotate-180 order-2 text-primary">
        ▲
      </div>
      <select ref={selectRef} name="" id="" className="py-2 w-full ">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
