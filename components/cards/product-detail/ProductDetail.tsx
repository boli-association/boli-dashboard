/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";
import TickBox from "../../public/assets/images/checkbox-circle-fill.svg";

interface ProductDetail {
    heading: string;
    value: string;
}

const ProductDetail:FunctionComponent<ProductDetail> = ({heading, value}) => {
    return (
        <div className="h-44 w-32 bg-white rounded-xl flex flex-col justify-between shad duration-300">
            <button className="w-20 rounded-full bg-btn-secondary text-sm ml-3 mt-4 product-btn font-semibold bg">Boli Token</button>
            <div className="pb-5 text-sm flex flex-start font-semibold ">
                <p className="ml-4 product-values"> {heading} <br /> {value}</p>
            </div>
        </div>
    );

};

export default ProductDetail;
