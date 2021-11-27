import { FunctionComponent } from "react";
import Sidebar from "../../components/sidebar/sidebar";

const Dashboard:FunctionComponent = () => {
    return (
        <div className="bg-green-300 border-green-600">
            <Sidebar />
        </div>
    );

};

export default Dashboard;
