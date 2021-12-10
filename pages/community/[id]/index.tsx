
import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import CommuityDetails from "@/components/cards/community-details/CommunityDetails";

const Community: FunctionComponent = () => {
    const community = ['Nike', 'Eco Org', 'R'];
    return (
        <Layout>
            <div className="flex-1 min-w-full">
                {/** Community Heading */}
                <div>
                    <h3 className="proposal-heading mt-12">Noonu Atoll</h3>
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
