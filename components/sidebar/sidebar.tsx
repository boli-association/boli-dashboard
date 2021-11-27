/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import TickBox from "../../public/assets/images/checkbox-circle-fill.svg";

const Sidebar:FunctionComponent = () => {
    return (
        <div className=" px-5">
            <div className="py-10">

            </div>
            <div className="flex  flex-col items-center py-5 py-6 hover:red">
                <Image alt="tick" src={TickBox} className="w-full h-9 hover:red " />
                <a href="/" className="text-primary pt-4 text-10 hover:red ">
                 Dashboard
                </a>

            </div>
            <div className="flex flex-col items-center  py-5 py-6">
                <Image alt="tick" src={TickBox} className="w-full h-9" />
                <a href="/" className="text-primary pt-4 text-10 ">
                 Wallet
                </a>

            </div>
            <div className="flex flex-col items-center  py-5 py-6 ">
                <Image alt="tick" src={TickBox} className="w-full h-9" />
                <a href="/" className="text-primary pt-4 text-10">
                 Swap
                </a>

            </div>
            <div className="flex flex-col items-center py-5 py-6 ">
                <Image alt="tick" src={TickBox} className="w-full h-9" />
                <a href="/" className="text-primary pt-4 text-10">
                 Proposals
                </a>

            </div>
            <div className="flex flex-col items-center py-5 py-6 ">
                <Image alt="tick" src={TickBox} className="w-full h-9" />
                <a href="/" className="text-primary pt-4 text-10">
                 Staking
                </a>

            </div>
            <div className="flex flex-col items-center py-5 py-6 ">
                <Image alt="tick" src={TickBox} className="w-full h-9" />
                <a href="/" className="text-primary pt-4 text-10">
                 History
                </a>
            </div>
        </div>
    );

};

export default Sidebar;
