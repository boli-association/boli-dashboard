import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ManageToken from "@/components/cards/manage-token/ManageToken";
import ExploreProject from "@/components/cards/explore-project/ExploreProject";
import TrendingCommunity from "@/components/cards/trending-community/TrendingCommunity";
import CreateCommunity from "@/components/cards/create-community/CreateCommunity";
import CreateToken from "@/components/cards/create-token/CreateToken";
import { Router, useRouter } from "next/dist/client/router";

const Community: FunctionComponent = () => {
  
  return (
    <Layout>
      <div className="flex-1 min-w-full">
        {/** Create Community */}
        <div>
          <p className="font-16 flex text-heading-primary">Create Community</p>
        </div>
        <div className="min-w-full py-5"> 
          <CreateCommunity children={undefined} />
        </div>
        {/** Create Token */}
        <div>
          <p className="font-16 flex text-heading-primary">Create Token</p>
        </div>
        <div className="min-w-full py-5"> 
          <CreateToken children={undefined} />
        </div>

       <div className="flex justify-end">
        <button className="px-5 py-2 bg-btn-dark-blue rounded-full text-btn-text-blue-1 hover:bg-white hover:text-secondary" name="connect">Submit</button>
      </div>

      </div>
    </Layout>
  );
};

export default Community;
