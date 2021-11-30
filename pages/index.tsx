import React, { FunctionComponent } from "react";
import { AccountConnectionProvider } from '../account/context';
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "./dashboard";

const Home:FunctionComponent = () => {
    return (
        <AccountConnectionProvider>
            <div className="w-screen flex"> 
                <Sidebar />
                <Dashboard />
            </div>
        </AccountConnectionProvider>

    );
};

export default Home;
