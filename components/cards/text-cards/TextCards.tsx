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
        <div className="h-44 w-32  ml-20 my-5 bg-white rounded-xl flex flex-col justify-between shadow duration-300 hover:bg-gradient-blue-y hover:text-white">
            <button className="w-10 rounded-full bg-btn-secondary text-sm ml-3 mt-4 font-semibold bg">Boli</button>
            <div className="pb-5 text-sm w-20 font-semibold text-center">
                <p className=""> {heading} </p>
                <p className=""> {value} &nbsp;&nbsp;&nbsp;</p> {/** Bad way to fix alignment. Quick fix */}
            </div>
        </div>
    );

};

export default TextCards;
