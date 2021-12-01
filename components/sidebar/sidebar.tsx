/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import DashboardIcon from "../../public/assets/icons/dashboard.svg";
import HistoryIcon from "../../public/assets/icons/history.svg";
import WalletIcon from "../../public/assets/icons/wallet.svg";
import ProposalsIcon from "../../public/assets/icons/proposals.svg";
import StakingIcon from "../../public/assets/icons/staking.svg";
import SwapIcon from "../../public/assets/icons/swap.svg";
import BoliLogo from "../../public/assets/icons/boli_logo.svg";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Wallet",
    icon: WalletIcon,
  },
  {
    title: "Swap",
    icon: SwapIcon,
  },
  {
    title: "Proposals",
    icon: ProposalsIcon,
  },
  {
    title: "Staking",
    icon: StakingIcon,
  },
  {
    title: "History",
    icon: HistoryIcon,
  },
];

const Sidebar: FunctionComponent = () => {
  return (
    <div className="px-5">
      <div className="py-10 flex justify-center">
        <Image src={BoliLogo} alt="boli-logo" />
      </div>
      <div className="flex flex-col gap-y-8">
        {sidebarItems.map((item, index) => (
          <Link key={index} href="/">
            <a className="flex flex-col items-center text-primary hover:text-gradient-blue-y">
              <Image alt="tick" src={item.icon} className="w-full h-8" />
              <p className="pt-4 text-10">{item.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
