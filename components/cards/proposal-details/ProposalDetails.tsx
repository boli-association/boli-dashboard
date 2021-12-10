import React, { FunctionComponent } from "react";
import BitmapLogo from "../../../public/assets/temp/palmtrees.jpg";
import Image from "next/image";


const ProposalDetails: FunctionComponent = () => {
  return (
    <div className="p-2 mt-15 flex - flex-wrap overflow-hidden  bg-gray-100 rounded-xl  shad duration-300 bg-white">
      <div className=" w-4/12 bg-red h-64 p-5">
          <Image src={BitmapLogo} width="300" height="250" className="rounded-2xl"/>
      </div>
      <div className=" w-8/12 bg-red p-5">
        <label className="block detail-heading-small text-base font-bold py-2">Type</label>
        <p className="text-base detail-p text-primary">Project</p>
        <label className="block  detail-heading-small text-base font-bold py-2">Description</label>
        <p className="text-base detail-p text-primary">
        Noonu Atoll is seeking 4,680 MVRB (1041 Noonu Boli) to fund conservation efforts for our unihabited islands. Funds will be held in a multisig wallet held by the Noonu Atoll council and dispersed in line with the outlined milestones.
        </p>
        <div className="">
          <label className="block detail-heading-small text-base font-bold py-2">Proposal ID</label>
          <p className="text-base detail-p text-primary">147</p>
        </div>
        <div className="">
          <label className="block detail-heading-small text-base font-bold py-2">Submit time</label>
          <p className="text-base detail-p text-primary">2021.11.23 01:14:34 (GMT+5)</p>
        </div>
        <label className="block detail-heading-small text-base font-bold py-2">Community</label>
        <p className="text-base detail-p text-primary">Noonu Atoll</p>
        <label className="block detail-heading-small text-base font-bold py-2">Minimum deposit</label>
        <p className="text-base detail-p text-primary">10.00 NBOLI</p>
        <label className="block detail-heading-small text-base font-bold py-2">Deposit end time</label>
        <p className="text-base detail-p text-primary">2021.11.28 21:42:52 (GMT+5)</p>
        <label className="block detail-heading-small text-base font-bold py-2">Valued at</label>
        <p className="text-base detail-p text-primary">50 NBOLI</p>
        <label className="block detail-heading-small text-base font-bold py-2">Depositors</label>
        <p className="text-base detail-p text-primary">boli1pnqwh03wtazjk5utj2g9u9ykwjnnjk4x8jyc3e</p>
        <p className="text-base detail-p text-primary">boli1pnqwh03wtazjk5utj2g9u9ykwjnnjk4x8jyvcu</p>
        <p className="text-base detail-p text-primary">boli1pnqwh03wtazjk5utj2g9u9ykwjnnjk4x8jye6j</p>
      </div>
    </div>
  );
};

export default ProposalDetails;
