import React, { FunctionComponent } from "react";
import RightSidebar from "../components/sidebar/right-sidebar";
import Sidebar from "../components/sidebar/sidebar";
import Dashboard from "./dashboard";

const Home: FunctionComponent = () => {
  return (
    <div className="overflow-x-hidden flex justify-between">
      <Sidebar />

      <div className="w-8/12">
        <Dashboard />
      </div>
      <div className="w-3/12">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
