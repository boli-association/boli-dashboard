/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import BoliLogo from "../../public/assets/icons/boli_logo.svg";
import { useRouter } from "next/dist/client/router";

const sidebarItems = [
  {
    title: "Dashboard",
    link: "",
  },
  {
    title: "Wallet",
  },
  {
    title: "Swap",
  },
  {
    title: "Proposals",
  },
  {
    title: "Community",
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
