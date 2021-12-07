/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import DashboardIcon from "../../public/assets/icons/dashboard.svg";
import HistoryIcon from "../../public/assets/icons/history.svg";
import WalletIcon from "../../public/assets/icons/wallet.svg";
import ProposalsIcon from "../../public/assets/icons/proposals.svg";
import SwapIcon from "../../public/assets/icons/swap.svg";
import BoliLogo from "../../public/assets/icons/boli_logo.svg";
import CommunityIcon from "../../public/assets/icons/community.svg";
import { useRouter } from "next/dist/client/router";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    link: "",
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
    title: "Community",
    icon: CommunityIcon,
  },
];

const isActive = (router, item) => {
  return router.pathname === `/${item.link ?? item.title.toLowerCase()}`;
};

const Sidebar: FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className="px-5">
      <div className="py-10 flex justify-center">
        <Image src={BoliLogo} alt="boli-logo" />
      </div>
      <div className="flex flex-col gap-y-8">
        {sidebarItems.map((item, index) => (
          <Link key={index} href={`/${item.link ?? item.title.toLowerCase()}`}>
            <a
              className={`flex flex-col items-center hover:text-gradient-blue-y
            ${isActive(router, item) ? "text-heading-primary" : "text-primary"}
            `}
            >
              <div
                className={`w-16 h-10 ${
                  isActive(router, item) ? "bg-heading-primary" : "bg-primary"
                }`}
                style={{
                  mask: `url(/assets/icons/${item.title.toLowerCase()}.svg) no-repeat center`,
                  WebkitMask: `url(/assets/icons/${item.title.toLowerCase()}.svg) no-repeat center`,
                }}
              ></div>
              <p className="pt-2 text-10">{item.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
