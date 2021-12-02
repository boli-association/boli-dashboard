/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import ChartComponent from "@/components/chart/ChartComponent";
import TokenComponent from "@/components/token/TokenComponent";

interface Props {
  children: React.ReactNode;
}
const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-app-primary px-10 py-10 w-8/12">{children}</div>

      <div className="w-3/12">
        <div className="flex flex-col items-center w-full px-5 py-7">
          {/* <input
        type="text"
        placeholder="launch a community"
        className="uppercase bg-app-primary rounded-full px-7 py-3"
      /> */}

          <ChartComponent />
          <TokenComponent />
        </div>
      </div>
    </div>
  );
};

export default Layout;
