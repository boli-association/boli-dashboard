import React, { FunctionComponent } from "react";
import ImageCardsLg from "../../components/cards/image-cards-lg/ImageCardsLg";
import ImageCardsMd from "../../components/cards/image-cards-md/ImageCardsMd";
import TextCards from "../../components/cards/text-cards/TextCards";
import TopicHeadingCard from "../../components/cards/topic-heading-card/TopicHeadingCard";

const Dashboard:FunctionComponent = () => {
    
    const cardHeading = [{heading: 'Boli Price', value: '1 USDT'},
        {heading: 'Issuance', value: '10,000'},
        {heading: 'Total Supply', value: '10,000,000'},{heading: 'Staking Ratio', value: '25.00%'}];

    const imageCardMdHeading = ['Nike', 'Adidas', 'Amazon', 'Ebay','Trade Me', 'Warehouse', 'Countdown'];
    const topicCardHeading = ['Sports', 'Music', 'Politics', 'Travel', 'Environment', 'Design', 'Mobility'];

    return (
        <div className="bg-app-primary flex-1 justify-between">
            {/** Button */}
            <div className="flex mt-20">
                <button className="ml-20 px-5 py-2 bg-btn-primary rounded-full text-white hover:bg-white hover:text-secondary" name="connect">CONNECT</button> 
            </div>

            {/** Token Details */}
            <div className="flex mt-10 justify-start flex-wrap">
                {cardHeading.map((item,index) => {
                    return (
                        <TextCards key={index} heading={item.heading} value={item.value}/>
                    );
                })}
               
            </div>  
            
            {/** Trending Communities */}
            <div className="font-16 ml-20 mt-10 text-heading-primary">Trending Communities</div>
            <div className="flex mt-10 justify-start flex-wrap">
                {imageCardMdHeading.map((item,index) => {
                    return (
                        <ImageCardsMd key={index} value={item} />
                    );
                })}
            </div>  

            {/** Exploring Communities */}
            <div className="font-16 ml-20 mt-10 text-heading-primary">Exploring Communities</div>
            <div className="flex flex-wrap mt-10 justify-start w-92
            ">
                {imageCardMdHeading.map((item,index) => {
                    return (
                        <ImageCardsLg key={index} value={item} />
                    );
                })}
            </div>  

            {/** Top Communities  */}
            <div className="font-16 ml-20 mt-10 text-heading-primary">Top Communities</div>
            <div className="flex flex-wrap justify-start w-92 py-10
            ">
                {topicCardHeading.map((item,index) => {
                    return (
                        <TopicHeadingCard key={index} value={item} />
                    );
                })}
            </div>  

        </div>
    );

};

export default Dashboard;
