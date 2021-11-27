import React, { FunctionComponent } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Dashboard from "./dashboard";

const Home:FunctionComponent = () => {

    return (
        <div className="flex min-h-screen"> 
            <Sidebar />
            <Dashboard />
        </div>

    );

};
  

export default Home;
