/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Sidebar from "../sidebar/Sidebar";


interface Props {
    children: JSX.Element;
}
const Layout: FunctionComponent<Props> = ({children}) => {
    return <div className="flex min-h-screen">
        <Sidebar />
        {children}
    </div>;
};

export default Layout;
