import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ManageToken from "@/components/cards/manage-token/ManageToken";
import ExploreProject from "@/components/cards/explore-project/ExploreProject";
import TrendingCommunity from "@/components/cards/trending-community/TrendingCommunity";

const Community: FunctionComponent = () => {
  const community = ['Nike', 'Eco Org', 'R'];
  return (
    <Layout>
      <div className="flex-1 justify-between">
        {/** Create Community */}
        <div>
          <p className="font-16 flex text-heading-primary">Create Community</p>
        </div>
        <div className="flex gap-x-8 gap-y-6 flex-wrap justify-start w-92 py-5"> 
        
        </div> 

      </div>
    </Layout>
  );
};

export default Community;
