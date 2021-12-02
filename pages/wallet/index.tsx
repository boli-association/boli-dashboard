import React, { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import ManageToken from "@/components/cards/manage-token/ManageToken";

const Wallet:FunctionComponent = () => {

    return (
        <Layout>
            <div className="bg-app-primary flex-1 justify-between">
            
             
                {/** My token */}
                <div>
                    <p className="font-16 ml-20 mt-10 text-heading-primary">
                    My Tokens </p>
                </div>
                <ManageToken value={'Boli Token'}/>

             
                {/** Boli Native Tokens */}
                <div>
                    <p className="font-16 ml-20 mt-10 text-heading-primary">
                    Boli Native </p>
                </div>
                <ManageToken value={'Boli Token'}/>

             
                {/** Community Tokens */}
                <div className="flex justify-between">
                    <p className="font-16 ml-20 mt-10 text-heading-primary">
                    Community Tokens </p>
                    <button className="bg-transparent mr-20 mt-10 text-btn-text-blue">Add Tokens</button>
                </div>
                <div className="mt-10">
                    <ManageToken value={'Boli Token'}/>
                </div>
               

            </div>
        </Layout>
       
    );

};

export default Wallet;
