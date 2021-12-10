/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import TickBox from "../../public/assets/images/checkbox-circle-fill.svg";

interface TopCategory {
    value: string;
}

const TopCategory:FunctionComponent<TopCategory> = ({value}) => {
    return (
        <div className="h-12 w-36 bg-white rounded-xl flex  justify-center shad duration-300">
            <p className="font-12 uppercase mt-3 text-secondary"> {value}</p> 
        </div>
    );

};

export default TopCategory;
