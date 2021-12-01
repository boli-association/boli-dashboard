/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import TreesImage from "../../../public/assets/temp/trees.jpg";

interface ImageCardsLg {
    value: string
}

const ImageCardsLg:FunctionComponent<ImageCardsLg> = ({value}) => {
    return (
        <div className="h-96 w-96 ml-20 my-5 bg-gray-100 rounded-xl flex flex-col justify-between shadow duration-300 hover:bg-white hover:shadow-xl">
            <Image src={TreesImage} alt="nike" /> {/** Temporary basis, don't worry about it */}
            <div className="pb-5 mt-2 text-sm flex flex-start font-semibold ">
                <p className="ml-4"> {value}</p>
            </div>
        </div>
    );

};

export default ImageCardsLg;
