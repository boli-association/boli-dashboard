/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import NikeImage from "../../../public/assets/temp/nike.jpg";

interface ImageCardsMd {
    value: string
}

const ImageCardsMd:FunctionComponent<ImageCardsMd> = ({value}) => {
    return (
        <div className="h-44 w-32 overflow-hidden bg-gray-100 rounded-xl flex flex-col justify-between shadow duration-300 hover:bg-white hover:shadow-xl">
            <Image src={NikeImage} alt="nike" /> {/** Temporary basis, don't worry about it */}
            <div className="pb-5 text-sm flex flex-start font-semibold ">
                <p className="ml-4"> {value}</p>
            </div>
        </div>
    );

};

export default ImageCardsMd;