
import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ProposalDetails from "@/components/cards/proposal-details/ProposalDetails";
import Link from 'next/link';

const Proposal: FunctionComponent = () => {
    return (
        <Layout>
            <div className="flex-1 min-w-full">
                {/** Community Heading */}
                <div className="flex justify-end">
                    <Link href="/proposals/deposit">
                        <a className="button-style proposal-button-text">Deposit</a>
                    </Link>
                </div>
                <div>
                    <h3 className="proposal-heading mt-12">Greening Noonu Atoll</h3>
                </div>

                {/** Community Details */}
                <div className="mt-10">
                    <ProposalDetails />
                </div>


            </div>
        </Layout>
    );
};

export default Proposal;
