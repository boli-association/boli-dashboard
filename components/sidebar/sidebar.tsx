/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import DashboardIcon from "../../public/assets/icons/dashboard.svg";
import HistoryIcon from "../../public/assets/icons/history.svg";
import WalletIcon from "../../public/assets/icons/wallet.svg";
import ProposalsIcon from "../../public/assets/icons/proposals.svg";
import StakingIcon from "../../public/assets/icons/staking.svg";
import SwapIcon from "../../public/assets/icons/swap.svg";
import BoliLogo from "../../public/assets/icons/boli_logo.svg";

const Sidebar:FunctionComponent = () => {
    return (
        <div className=" px-5">
            <div className="py-10 flex justify-center">
                <Image src={BoliLogo} alt="boli-logo"/>
            </div>
            <div className="flex  flex-col items-center py-5 py-6">
                <Image alt="tick" src={DashboardIcon} className="w-full h-9" />
                <p className="text-primary pt-4 text-10 hover:text-gradient-blue-y">
                    <a href="/"> Dashboard</a>
                </p>

            </div>
            <div className="flex flex-col items-center  py-5 py-6 ">
                <Image alt="tick" src={WalletIcon} className="w-full h-9" />
                <p className="text-primary pt-4 text-10 hover:text-gradient-blue-y">
                    <a href="/"> Wallet</a>
                </p>

            </div>
            <div className="flex flex-col items-center  py-5 py-6 ">
                <Image alt="tick" src={SwapIcon} className="w-full h-9" />
                <p className="text-primary pt-4 text-10 hover:text-gradient-blue-y">
                    <a href="/swap"> Swap</a>
                </p>

            </div>
            <div className="flex flex-col items-center py-5 py-6 ">
                <Image alt="tick" src={ProposalsIcon} className="w-full h-9" />
                <p className="text-primary pt-4 text-10 hover:text-gradient-blue-y">
                    <a href="/"> Proposals</a>
                </p>
            </div>
            <div className="flex flex-col items-center py-5 py-6 ">
                <Image alt="tick" src={StakingIcon} className="w-full h-9" />
                <p className="text-primary pt-4 text-10 hover:text-gradient-blue-y">
                    <a href="/"> Staking</a>
                </p>

            </div>
            <div className="flex flex-col items-center py-5 py-6">
                <Image alt="tick" src={HistoryIcon} className="w-full h-9" />
                <p className="text-primary pt-4 text-10 hover:text-gradient-blue-y">
                    <a href="/"> History</a>
                </p>
            </div>
        </div>
    );

};

export default Sidebar;
