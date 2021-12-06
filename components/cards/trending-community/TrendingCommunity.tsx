/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import RandomImage from "../../../public/assets/temp/bitmap.png";

interface TrendingCommunity {
    value: string
}

const TrendingCommunity:FunctionComponent<TrendingCommunity> = ({value}) => {
    return (
        <div className="h-44 w-32 overflow-hidden p-3 mt-5 bg-gray-100 rounded-xl flex flex-col justify-between shadow duration-300 hover:bg-white hover:shadow-xl">
            <Image src={RandomImage}  alt="nike" /> {/** Temporary basis, don't worry about it */}
            <div className="pb-5 text-sm flex flex-start font-semibold ">
                <p className="ml-2"> {value}</p>
            </div>
        </div>
    );

};

export default TrendingCommunity;
