import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ManageToken from "@/components/cards/manage-token/ManageToken";

const Wallet: FunctionComponent = () => {
  return (
    <Layout>
      <div className="flex-1 justify-between">
        {/** My token */}
        <div>
          <p className="font-16 flex text-heading-primary">My Tokens </p>
        </div>
        <ManageToken value={"Boli Token"} />

        {/** Boli Native Tokens */}
        <div>
          <p className="font-16 flex mt-10 text-heading-primary">
            Boli Native{" "}
          </p>
        </div>
        <ManageToken value={"Boli Token"} />

        {/** Community Tokens */}
        <div className="flex items-center mt-10 mb-6 mr-20 justify-between">
          <p className="font-16 flex text-heading-primary">Community Tokens</p>
          <div className="flex gap-x-3 items-center">
            <button className="bg-transparent text-btn-text-blue">
              Add Tokens
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-btn-text-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <ManageToken value={"Boli Token"} />
      </div>
    </Layout>
  );
};

export default Wallet;
