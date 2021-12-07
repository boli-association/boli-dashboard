import TrendingCommunity from "@/components/cards/trending-community/TrendingCommunity";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/dist/client/router";
import React, { FunctionComponent } from "react";

const Community: FunctionComponent = () => {
  const community = ['Nike', 'Eco Org', 'R'];
  const router = useRouter();

  const onCardClick  = ():void => {
    router.push('/community/1');
  }

  return (
    <Layout>
      <div className="flex-1 justify-between">
        {/** Discover Communities */}
        <div>
          <p className="font-16 flex text-heading-primary">Discover Communities</p>
        </div>
        <div className="flex gap-x-8 gap-y-6 flex-wrap justify-start w-92 py-5"> 
        {community.map((item, key) => ( 
            <TrendingCommunity key={key} value={item}  onClick={onCardClick} />
        ))}
        </div>

        <div className="flex justify-center mt-10">
        <button onClick={() => router.push('/community/create-community')} className="px-5 py-2 bg-custom-green-light rounded-full text-btn-text-blue-1 hover:bg-white hover:text-secondary" name="connect">Create Community</button>
        </div>
       
      </div>
    </Layout>
  );
};

export default Community;
