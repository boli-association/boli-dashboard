import React, { FunctionComponent } from "react";
import Layout from "../../components/layout/Layout";

const Wallet:FunctionComponent = () => {

    return (
        <Layout>
            <div className="bg-app-primary flex-1 justify-between">
            
             
                {/** Trending Communities */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">My Tokens</div>

             
                {/** Trending Communities */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">Boli Native</div>

             
                {/** Trending Communities */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">Community Tokens</div>

            </div>
        </Layout>
       
    );

};

export default Wallet;
