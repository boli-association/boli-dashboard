/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import TickBox from "../../public/assets/images/checkbox-circle-fill.svg";

interface TextCard {
    heading: string;
    value: string;
}

const TextCards:FunctionComponent<TextCard> = ({heading, value}) => {
    return (
        <div className="h-44 w-32 my-5 bg-white rounded-xl flex flex-col justify-between shadow duration-300 hover:bg-gradient-blue-y hover:text-white">
            <button className="w-10 rounded-full bg-btn-secondary text-sm ml-3 mt-4 font-semibold bg">Boli</button>
            <div className="pb-5 text-sm flex flex-start font-semibold ">
                <p className="ml-4"> {heading} <br /> {value}</p>
            </div>
        </div>
    );

};

export default TextCards;
