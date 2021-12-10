import TrendingCommunity from "@/components/cards/trending-community/TrendingCommunity";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/dist/client/router";
import React, { FunctionComponent } from "react";
import Image from "next/image";

const Community: FunctionComponent = () => {
  const communityList = [
    { name: "Noonu Atoll", profileImg: "/assets/temp/1.png", tokenCode: "NBOLI" },
    { name: "The Eco Org", profileImg: "/assets/temp/2.png", tokenCode: "ECOBOLI" },
    { name: "Banyan Tree", profileImg: "/assets/temp/3.png", tokenCode: "BANYANBOLI" },
    { name: "DJRukey", profileImg: "/assets/temp/4.png", tokenCode: "DJKBOLI" }
  ]
  const router = useRouter();

  const onCardClick = (): void => {
    router.push('/community/1');
  };

  return (
    <Layout>
      <div className="flex-1 justify-between">
        {/** Discover Communities */}
        <div>
          <p className="font-16 flex text-heading-primary">Discover Communities</p>
        </div>
        
        {communityList.map((item, key) => (
        <div onClick={onCardClick} className="h-44 w-32 overflow-hidden p-3 mt-5 bg-gray-100 rounded-xl flex flex-col justify-between shad duration-300 bg-white">
            <Image className="rounded-image" src={item.profileImg} width="108px" height="108px"  alt="nike" /> {/** Temporary basis, don't worry about it */}
            <div className="pb-0 text-sm flex flex-start font-semibold ">
                <p className="community-p">{item.name}<br/>
                <span className="communityTokenCode">{item.tokenCode}</span></p>
            </div>
        </div>
        ))}

        <div className="flex justify-center mt-10">
          <button onClick={() => router.push('/community/create-community')} className="px-5 py-2 bg-custom-green-light rounded-full text-btn-text-blue-1 hover:bg-white hover:text-secondary" name="connect">Create Community</button>
        </div>

      </div>
    </Layout>
  );
};

export default Community;
