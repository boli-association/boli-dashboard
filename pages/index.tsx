import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ProductDetail from "@/components/cards/product-detail/ProductDetail";
import TrendingCommunity from "@/components/cards/trending-community/TrendingCommunity";
import ExploreProject from "@/components/cards/explore-project/ExploreProject";
import TopCategory from "@/components/cards/top-category/TopCategory";

const Home:FunctionComponent = () => {

    {/** All these varibales will be replaced by API data. Not to worry about it. */}
    const productDetails = [{heading: 'Boli Price', value: '1 USDT'},
        {heading: 'Issuance', value: '10,000'},
        {heading: 'Total Supply', value: '10,000,000'},{heading: 'Staking Ratio', value: '25.00%'}];

    const merchantHeadings = ['Nike', 'Adidas', 'Amazon', 'Ebay','Trade Me'];
    const topCategories = ['Sports', 'Music', 'Politics', 'Travel', 'Environment', 'Design', 'Mobility'];

    return (
        <Layout>
            <div className="bg-app-primary flex-1 justify-between">
                {/** Button */}
                <div className="flex mt-20">
                    <button className="ml-20 px-5 py-2 bg-btn-primary rounded-full text-white hover:bg-white hover:text-secondary" name="connect">CONNECT</button> 
                </div>

                {/** Token Details */}
                <div className="flex mt-10 justify-start flex-wrap">
                    {productDetails.map((item,index) => {
                        return (
                            <ProductDetail key={index} heading={item.heading} value={item.value}/>
                        );
                    })}
               
                </div>  
            
                {/** Trending Communities */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">Trending Communities</div>
                <div className="flex mt-10 justify-start flex-wrap">
                    {merchantHeadings.map((item,index) => {
                        return (
                            <TrendingCommunity key={index} value={item} />
                        );
                    })}
                </div>  

                {/** Exploring Communities */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">Exploring Communities</div>
                <div className="flex flex-wrap mt-10 justify-start w-92
            ">
                    {merchantHeadings.map((item,index) => {
                        return (
                            <ExploreProject key={index} value={item} />
                        );
                    })}
                </div>  

                {/** Top Communities  */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">Top Communities</div>
                <div className="flex flex-wrap justify-start w-92 py-10
            ">
                    {topCategories.map((item,index) => {
                        return (
                            <TopCategory key={index} value={item} />
                        );
                    })}
                </div>  

            </div>
        </Layout>
       
    );

};

export default Home;
