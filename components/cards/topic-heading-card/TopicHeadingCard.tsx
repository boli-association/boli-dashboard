/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import TickBox from "../../public/assets/images/checkbox-circle-fill.svg";

interface TopicHeading {
    value: string;
}

const TopicHeadingCard:FunctionComponent<TopicHeading> = ({value}) => {
    return (
        <div className="h-12 w-36  ml-20 bg-white rounded-xl flex  justify-center shadow duration-300 hover:bg-gradient-blue-y hover:text-white">
            {/* <div className="pb-5 text-sm w-20 font-semibold text-center"> */}
            <p className="font-14 uppercase mt-3"> {value}</p> 
            {/* </div> */}
        </div>
    );

};

export default TopicHeadingCard;
