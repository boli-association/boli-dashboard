/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import TickBox from "../../public/assets/images/checkbox-circle-fill.svg";

interface TopicHeading {
    value: string;
}

const TopicHeadingCard:FunctionComponent<TopicHeading> = ({value}) => {
    return (
        <div className="h-12 w-36  ml-20 my-5 bg-white rounded-xl flex  justify-center shadow duration-300 hover:bg-gradient-blue-y hover:text-white">
            <p className="font-14 uppercase mt-3"> {value}</p> 
        </div>
    );

};

export default TopicHeadingCard;
