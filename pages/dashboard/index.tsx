import React, { FunctionComponent } from "react";
import TextCards from "../../components/cards/text-cards/text-cards";

const Dashboard:FunctionComponent = () => {
    const cardHeading = [{heading: 'Boli Price', value: '1 USDT'},
        {heading: 'Issuance', value: '10,000'},
        {heading: 'Total Supply', value: '10,000,000'},{heading: 'Staking Ratio', value: '25.00%'}];
    return (
        <div className="bg-app-primary flex-1 justify-between">
            <div className="flex mt-20">
                <button className="ml-20 px-5 py-2 bg-btn-primary rounded-full text-white" name="connect">CONNECT</button> 
            </div>
            <div className="flex mt-20 justify-start">
                {cardHeading.map((item,index) => {
                    return (
                        <TextCards key={index} heading={item.heading} value={item.value}/>
                    );
                })}
               
            </div>  
           
        </div>
    );

};

export default Dashboard;
function heading(heading: any): React.ReactNode {
    throw new Error("Function not implemented.");
}

