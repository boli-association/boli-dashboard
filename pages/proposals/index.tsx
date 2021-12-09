import { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ProposalCard from "@/components/cards/proposal/ProposalCard";
import Link from "next/link";

const Proposals: FunctionComponent = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-end">
          <Link href="/proposals/new">
            <a className="button-style">New proposal</a>
          </Link>
        </div>
        <h2>Explore Proposals</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-4">
          <ProposalCard
            title="Abstract 3D artworks"
            creator="Yani studio"
            value={320.0}
            minimum={5.0}
            coin="YNS"
          />
          <ProposalCard
            title="Abstract 3D artworks"
            creator="Yani studio"
            value={320.0}
            minimum={5.0}
            coin="YNS"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Proposals;
