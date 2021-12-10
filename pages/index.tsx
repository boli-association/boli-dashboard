import ExploreProject from "@/components/cards/explore-project/ExploreProject";
import ProductDetail from "@/components/cards/product-detail/ProductDetail";
import TopCategory from "@/components/cards/top-category/TopCategory";
import TrendingCommunity from "@/components/cards/trending-community/TrendingCommunity";
import Layout from "@/components/layout/Layout";
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

  const merchantHeadings = ["Nike", "Adidas", "Amazon", "Ebay", "Trade Me"];
  const topCategories = [
    "Sports",
    "Music",
    "Politics",
    "Travel",
    "Environment",
    "Design",
    "Mobility",
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
          className="px-5 py-2 bg-btn-primary rounded-full text-white hover:bg-white hover:text-secondary"
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
        <div className="font-16 mt-10 text-heading-primary">
          Trending Communities
        </div>
        <div className="flex mt-10 gap-x-8 gap-y-4 justify-start flex-wrap">
          {merchantHeadings.map((item, index) => {
            return <TrendingCommunity onClick={onCardClick} key={index} value={item} />;
          })}
        </div>

        {/** Exploring Communities */}
        <div className="font-16 mt-10 text-heading-primary">
          Exploring Communities
        </div>
        <div
          className="flex gap-x-8 gap-y-6 flex-wrap mt-10 justify-start w-92
            "
        >
          {merchantHeadings.map((item, index) => {
            return <ExploreProject key={index} value={item} />;
          })}
        </div>

        {/** Top Communities  */}
        <div className="font-16 mt-10 text-heading-primary">
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
