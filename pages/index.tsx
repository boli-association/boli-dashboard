import React, { FunctionComponent } from "react";
import ChartComponent from "../components/chart/ChartComponent";
import Sidebar from "../components/sidebar/sidebar";
import TokenComponent from "../components/token/TokenComponent";
import Dashboard from "./dashboard";

const Home: FunctionComponent = () => {
  return (
    <div className="overflow-x-hidden flex justify-between">
      <Sidebar />

      <div className="w-8/12">
        <Dashboard />
      </div>
      <div className="w-3/12">
        <div className="flex flex-col items-center w-full px-5 py-7">
          {/* <input
        type="text"
        placeholder="launch a community"
        className="uppercase bg-app-primary rounded-full px-7 py-3"
      /> */}

          <ChartComponent />
          <TokenComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
