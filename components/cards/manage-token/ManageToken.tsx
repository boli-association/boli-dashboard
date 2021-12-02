import { FunctionComponent } from "react";
import Image from "next/image";
import NikeImage from "../../../public/assets/temp/nike.jpg";

interface ManageToken {
    value: string
}

const ManageToken:FunctionComponent<ManageToken> = ({value}) => {
    return (
        <div className="py-4 px-7 w-auto mr-20 my-5 bg-white rounded-3xl flex  justify-between shadow duration-300">
            <p className="font-14 my-2 text-heading-primary"> {value}</p> 
            <p className="font-14 my-2 text-heading-primary"> 350,000,000</p>
            <div className="flex gap-x-3">
                <button className="px-5 py-2 bg-btn-light-blue rounded-full text-btn-text-blue hover:bg-white hover:text-secondary" name="connect">Manage</button>
                <button className="px-5 py-2 bg-btn-dark-blue rounded-full text-btn-text-blue-1 hover:bg-white hover:text-secondary" name="connect">Send</button>
            </div>
           
        </div>
    );

};

export default ManageToken;
