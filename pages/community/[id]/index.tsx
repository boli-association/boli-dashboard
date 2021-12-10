
import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ManageToken from "@/components/cards/manage-token/ManageToken";
import ExploreProject from "@/components/cards/explore-project/ExploreProject";
import TrendingCommunity from "@/components/cards/trending-community/TrendingCommunity";
import CreateCommunity from "@/components/cards/create-community/CreateCommunity";
import CreateToken from "@/components/cards/create-token/CreateToken";
import CommuityDetails from "@/components/cards/community-details/CommunityDetails";

const Community: FunctionComponent = () => {
    const community = ['Nike', 'Eco Org', 'R'];
    return (
        <Layout>
            <div className="flex-1 min-w-full">
                {/** Community Heading */}
                <div>
                    <p className="font-16 flex text-heading-primary">Noonu Atoll</p>
                </div>

                {/** Community Details */}
                <div className="mt-10">
                    <CommuityDetails />
                </div>


            </div>
        </Layout>
    );
};

export default Community;
