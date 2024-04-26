import { useEffect, useState } from "react";
import { handleBitcoinFetch } from "../../API/Bitcoins";
import { newObject } from "../../Data/Data";

import bitcoin from "/src/assets/bitcoin.webp";

const TopCategories = () => {
  const [bitcoins, setBitcoins] = useState(newObject);

  useEffect(() => {
    handleBitcoinFetch(bitcoins, setBitcoins);
  }, [bitcoins]);

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        <div className=" h-[430px] rounded-lg overflow-hidden shadow-lg">
          <img src={bitcoin} alt={"bitcoin"} className="w-full h-full" />
        </div>

        <div className="h-fit ">
          <div className="h-fit flex justify-between gap-3 mb-4 bg-pink-400">
            <div className="h-[130px] w-[250px] bg-green-700 rounded-md"></div>
            <div className="">
              <h1 className="pb-2 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur
              </h1>
              <p className="pb-1">Oplano james Mulbah</p>
              <p>June 5 2043, 11:23:344</p>
            </div>
          </div>

          <div className="h-fit flex justify-between gap-3 mb-4 bg-purple-800">
            <div className="h-[130px] w-[250px] bg-green-700 rounded-md"></div>
            <div className="">
              <h1 className="pb-2 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur
              </h1>
              <p className="pb-1">Oplano james Mulbah</p>
              <p>June 5 2043, 11:23:344</p>
            </div>
          </div>

          <div className="h-fit flex justify-between gap-3 bg-red-600">
            <div className="h-[130px] w-[250px] bg-green-700 rounded-md"></div>
            <div className="">
              <h1 className="pb-2 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur
              </h1>
              <p className="pb-1">Oplano james Mulbah</p>
              <p>June 5 2043, 11:23:344</p>
            </div>
          </div>
        </div>

        <div className="bg-red-600 rounded-md"></div>
      </div>
    </>
  );
};

export default TopCategories;
