/* eslint-disable @next/next/no-html-link-for-pages */
import { FunctionComponent } from "react";
import Image from "next/image";

interface TrendingCommunity {
    communityName: string;
    communityLogo: string;
    communityToken: string;
    onClick: () => void;
}

const TrendingCommunity:FunctionComponent<TrendingCommunity> = ({communityName, communityLogo, communityToken, onClick}) => {
    return (
        <div className="flex gap-x-8 gap-y-6 flex-wrap justify-start w-92 py-10">
            <div onClick={onClick} className="h-44 w-32 overflow-hidden p-3 mt-5 bg-gray-100 rounded-xl flex flex-col justify-between shad duration-300 bg-white">
                <Image className="rounded-image" src={communityLogo} width="108px" height="108px"  alt="nike" /> {/** Temporary basis, don't worry about it */}
                <div className="pb-0 text-sm flex flex-start font-semibold ">
                    <p className="community-p">{communityName}<br/>
                    <span className="communityTokenCode">{communityToken}</span></p>
                </div>
            </div>
        </div>
    );

};

export default TrendingCommunity;
