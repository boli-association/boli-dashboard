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
            <a className="button-style proposal-button-text">New proposal</a>
          </Link>
        </div>
        <h3 className="proposal-heading mt-12">Discover proposals</h3>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 mt-4">
          <ProposalCard
            thumb="/assets/temp/palmtrees.jpg"
            title="Greening Noonu Atoll"
            creator="Noonu Atoll"
            value={1020.0}
            minimum={10.0}
            coin="NBOLI"
            enddate="12/23/2021"
            endtime="9.00PM"
          />
          <ProposalCard
            thumb="/assets/temp/reef.jpg"
            title="Conserving Noonu Reefs"
            creator="Noonu Atoll"
            value={320.0}
            minimum={5.0}
            coin="NBOLI"
            enddate="12/28/2021"
            endtime="11.00PM"
          />
          <ProposalCard
            thumb="/assets/temp/3dart.jpg"
            title="3D Slices"
            creator="Yarts"
            value={980.0}
            minimum={15.0}
            coin="YBOLI"
            enddate="01/10/2022"
            endtime="7.00PM"
          />
          <ProposalCard
            thumb="/assets/temp/dj.jpg"
            title="IslandDM"
            creator="DJRukey"
            value={200.0}
            minimum={10.0}
            coin="RKBOLI"
            enddate="01/12/2022"
            endtime="1.00PM"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Proposals;
