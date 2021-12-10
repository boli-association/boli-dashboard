import ExploreProject from "@/components/cards/explore-project/ExploreProject";
import ProductDetail from "@/components/cards/product-detail/ProductDetail";
import TopCategory from "@/components/cards/top-category/TopCategory";
import TrendingCommunity from "@/components/cards/trending-community/TrendingCommunity";
import Layout from "@/components/layout/Layout";
import ProposalCard from "@/components/cards/proposal/ProposalCard";
import { useRouter } from "next/dist/client/router";
import React, { FunctionComponent, useState } from "react";


const Home: FunctionComponent = () => {
  {
    /** All these varibales will be replaced by API data. Not to worry about it. */
  }
  const productDetails = [
    { heading: "Boli Price", value: "1 USDT" },
    { heading: "Issuance", value: "10,000" },
    { heading: "Total Supply", value: "10,000,000" },
    { heading: "Staking Ratio", value: "25.00%" },
  ];

  const communityList = [
    { name: "Noonu Atoll", profileImg: "/assets/temp/1.png", tokenCode: "NBOLI" },
    { name: "The Eco Org", profileImg: "/assets/temp/2.png", tokenCode: "ECOBOLI" },
    { name: "Banyan Tree", profileImg: "/assets/temp/3.png", tokenCode: "BANYANBOLI" },
    { name: "DJRukey", profileImg: "/assets/temp/4.png", tokenCode: "DJKBOLI" }
  ]

  const merchantHeadings = ["Noonu Atoll", "Adidas", "Amazon", "Ebay"];
  const projectHeadings = ["Greening Noonu Atoll", "Adidas", "Amazon", "Ebay"];
  const topCategories = [
    "Sports",
    "Music",
    "Politics",
    "Travel",
    "Environment",
    "Design",
  ];

  const router = useRouter();
  const onCardClick = (): void => {
    router.push('/community/1');
  };
  const [currentAccount, setCurrentAccount] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const connectWallet = async () => {
    const currentWindow: any = window;
    if (!currentWindow.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "cosmoshub-4";
      try {
        await currentWindow.keplr.enable(chainId);
      }
      catch (e) {
        alert('Please log into Keplr account');
      }
      const offlineSigner = currentWindow.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      console.log(accounts);
      setCurrentAccount(accounts[0].address);
      setIsAuthenticated(true);
      alert('You have connected to your wallet to Boli network!') // Right now we will focus on the first accoumt;
    }
  };

  return (
    <Layout>
      <div className="flex-1 justify-between">

        {/** Button/ Address */}
        {!isAuthenticated ? (<button
          className="px-5 py-2 connect-btn bg-btn-primary rounded-full text-white hover:bg-white hover:text-secondary"
          name="connect"
          onClick={connectWallet}
        >
          CONNECT
        </button>) : (<div className="p-1 bg-white rounded-3xl">
          <p className="px-5 text-primary text-base">{currentAccount}</p>
        </div>)}

        {/** Token Details */}
        <div className="flex mt-10 gap-x-8 gap-y-4 justify-start flex-wrap">
          {productDetails.map((item, index) => {
            return (
              <ProductDetail
                key={index}
                heading={item.heading}
                value={item.value}
              />
            );
          })}
        </div>

        {/** Trending Communities */}
        <div className="font-16 mt-12 text-heading-primary">
          Trending Communities
        </div>
        <div className="flex mt-4 gap-x-8 gap-y-4 justify-start flex-wrap">
          {communityList.map((item, index) => {
            return <TrendingCommunity onClick={onCardClick} key={index} communityName={item.name} communityLogo={item.profileImg} communityToken={item.tokenCode} />;
          })}
        </div>

        {/** Exploring Communities */}
        <div className="font-16 mt-12 text-heading-primary">
          Exploring Projects
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-10">
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

        {/** Top Communities  */}
        <div className="font-16 mt-12 text-heading-primary">
          Top Communities
        </div>
        <div
          className="flex gap-x-8 gap-y-6 flex-wrap justify-start w-92 py-10
            "
        >
          {topCategories.map((item, index) => {
            return <TopCategory key={index} value={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
