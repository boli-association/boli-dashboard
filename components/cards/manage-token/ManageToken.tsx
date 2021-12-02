import { FunctionComponent } from "react";
import Image from "next/image";
import NikeImage from "../../../public/assets/temp/nike.jpg";

interface ManageToken {
    value: string
}

const ManageToken:FunctionComponent<ManageToken> = ({value}) => {
    return (
        <div className="py-5 w-auto mr-20 ml-20 my-5 bg-white rounded-3xl flex  justify-between shadow duration-300">
            <p className="font-14 my-2 ml-10 text-heading-primary"> {value}</p> 
            <p className="font-14 my-2 ml-10 text-heading-primary"> 350,000,000</p>
            <div className="mx-2">
                <button className="ml-20 px-5 py-2 bg-btn-light-blue rounded-full text-btn-text-blue hover:bg-white hover:text-secondary" name="connect">Manage</button>
                <button className="ml-20 px-5 py-2 bg-btn-dark-blue rounded-full text-btn-text-blue-1 hover:bg-white hover:text-secondary" name="connect">Send</button>
            </div>
           
        </div>
    );

};

export default ManageToken;
