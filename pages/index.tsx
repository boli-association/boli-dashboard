import React, { FunctionComponent } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "./dashboard";

const Home:FunctionComponent = () => {

    return (
        <div className="w-screen flex overflow-hidden"> 
            <Sidebar />
            <Dashboard />
        </div>

    );

};
  

export default Home;
