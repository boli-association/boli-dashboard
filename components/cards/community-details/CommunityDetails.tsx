import React, { FunctionComponent } from "react";
import BitmapLogo from "../../../public/assets/temp/3d.jpg";
import Image from "next/image";


const CommuityDetails: FunctionComponent = () => {
  return (
    <div className="p-2 mt-15 flex - flex-wrap overflow-hidden  bg-gray-100 rounded-xl  shadow duration-300 hover:bg-white hover:shadow-xl">
      <div className=" w-4/12 bg-red h-64 p-5">
          <Image src={BitmapLogo} width="300" height="250" className="rounded-2xl"/>
      </div>
      <div className=" w-8/12 bg-red h-64 p-5">
      <label className="block text-gray-700 text-base font-bold py-2">Type</label>
      <p className="text-base text-primary" > Community </p>
      <label className="block text-gray-700 text-base font-bold py-2">Description</label>
      <p className="text-base text-primary">
      Noonu Atoll (also known as Southern Miladhunmadulu Atoll or Miladhunmadulu Dhekunuburi) is an administrative 
      division of the Maldives corresponding to the southern section of Miladhunmadulu Atoll. The capital is Manadhoo. 
      Total population of Noonu Atoll is around 10,000 people (Information from: 2006).
      </p>

      </div>
    </div>
  );
};

export default CommuityDetails;
