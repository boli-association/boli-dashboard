import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ManageToken from "@/components/cards/manage-token/ManageToken";

const Wallet:FunctionComponent = () => {

    return (
        <Layout>
            <div className="bg-app-primary flex-1 justify-between">
            
             
                {/** My token */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">My Tokens</div>
                <ManageToken value={'Boli Token'}/>

             
                {/** Boli Native Tokens */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">Boli Native</div>
                <ManageToken value={'Boli Token'}/>

             
                {/** Community Tokens */}
                <div className="font-16 ml-20 mt-10 text-heading-primary">Community Tokens</div>
                <ManageToken value={'Boli Token'}/>

            </div>
        </Layout>
       
    );

};

export default Wallet;
