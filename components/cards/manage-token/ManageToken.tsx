import { FunctionComponent } from "react";
import Image from "next/image";
import NikeImage from "../../../public/assets/temp/nike.jpg";

interface ManageToken {
    value: string
}

const ManageToken:FunctionComponent<ManageToken> = ({value}) => {
    return (
        <div className="py-4 px-7 w-auto mr-0 my-5 bg-white rounded-2xl flex  justify-between shad duration-300">
            <p className="font-14 my-2 text-heading-primary"> {value}</p> 
            <div className="flex gap-x-3">
                <button className="wallet-btn px-5 py-2 bg-btn-light-blue rounded-full text-btn-text-blue" name="connect">Swap</button>
                <button className="wallet-btn px-5 py-2 bg-btn-dark-blue rounded-full text-btn-text-blue-1" name="connect">Send</button>
            </div>
           
        </div>
    );

};

export default ManageToken;
