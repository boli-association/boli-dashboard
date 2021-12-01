import { FunctionComponent } from "react";
import Chart from "./chart";

const tokenData = [
  {
    color: "#",
    name: "Tomorrowland token",
    price: "BLT 0.20",
  },
  {
    color: "#",
    name: "Banyan tree token",
    price: "BLT 0.20",
  },
  {
    color: "#",
    name: "Noonu token",
    price: "BLT 0.20",
  },
  {
    color: "#",
    name: "Tomorrowland token",
    price: "BLT 0.20",
  },
];

const chartData = [
  {
    title: "Issuance",
    amount: "10,000",
  },
  {
    title: "Issuance",
    amount: "10,000",
  },
  {
    title: "Total supply",
    amount: "100,000,000",
  },
  {
    title: "Staking ratio",
    amount: "25.00%",
  },
];

const RightSidebar: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center w-full px-5 py-7">
      {/* <input
        type="text"
        placeholder="launch a community"
        className="uppercase bg-app-primary rounded-full px-7 py-3"
      /> */}
      <div
        className="rounded-xl p-4 w-full text-white flex flex-col items-center"
        style={{ backgroundColor: "#009c99" }}
      >
        <h2 className="font-semibold">Universal Music Group</h2>
        <h5 className="font-semibold text-10 mb-4">UMGT</h5>

        {/* <Chart /> */}

        <div className="grid grid-cols-2 mt-6 w-full gap-4">
          {chartData.map((data, index) => (
            <div
              key={index}
              className="rounded-xl px-4 py-2 text-xl"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <h4>{data.title}</h4>
              <p>{data.amount}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h3 className="mb-4 mt-6 font-semibold">Popular Tokens</h3>
        {tokenData.map((token, index) => (
          <div
            className="border border-btn-secondary rounded-xl mb-2 items-center px-3 py-2 flex gap-x-4"
            key={index}
          >
            <div className="w-10 h-10 rounded-xl bg-red-400"></div>
            <div>
              <h4 className="font-semibold">{token.name}</h4>
              <p className="text-lg text-primary">{token.price}</p>
            </div>
          </div>
        ))}

        <button className="text-gradient-blue-y float-right mt-4">
          View all tokens
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
