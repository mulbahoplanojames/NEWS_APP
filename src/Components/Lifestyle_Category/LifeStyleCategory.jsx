import { Link } from "react-router-dom";

import bitcoin from "/src/assets/bitcoin.webp";
import car from "/src/assets/car.avif";
import food from "/src/assets/food.webp";
import sport from "/src/assets/sport.avif";

const LifeStyleCategory = () => {
  return (
    <>
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-5">
        <div className=" h-[430px] rounded-lg overflow-hidden shadow-lg">
          <img src={sport} alt={"sports"} className="w-full h-full" />
        </div>

        <div className="h-fit ">
          <div className="h-fit flex justify-between gap-3 mb-4">
            <div className="h-[130px] w-[250px] rounded-md overflow-hidden">
              <img src={car} alt={"bitcoin"} className="w-full h-full" />
            </div>
            <div className="">
              <h1 className="pb-2 text-base">
                Toyota is talking about releasing her first electric car in
                India and we are excited to see it.
              </h1>
              <p className="pb-1 font-semibold">Author : Oplano james</p>
              <p className="font-semibold">Date : June 5 2043, 11:23</p>
            </div>
          </div>

          <div className="h-fit flex justify-between gap-3 mb-4">
            <div className="h-[130px] w-[250px] bg-green-700 rounded-md overflow-hidden">
              <img src={food} alt={"Food"} className="w-full h-full" />
            </div>
            <div className="">
              <h1 className="pb-2 text-base">
                All of the essential tips on what food to eat to get good health
                and how to prepare them.
              </h1>
              <p className="pb-1 font-semibold">Author: Smith Lon</p>
              <p className="font-semibold">Date: June 3 2023, 9:23</p>
            </div>
          </div>

          <div className="h-fit flex justify-between gap-3">
            <div className="h-[130px] w-[250px] bg-green-700 rounded-md overflow-hidden">
              <img src={bitcoin} alt={"bitcoin"} className="w-full h-full" />
            </div>
            <div className="">
              <h1 className="pb-2 text-base">
                The ctypto market is on the verge of collapse. Here are some of
                the latest tips ad tricks.
              </h1>
              <p className="pb-1 font-semibold">Author: Rechard</p>
              <p className="font-semibold">Date: May 3 2043, 4:36</p>
            </div>
          </div>
        </div>

        <div className="bg-[#eaeef3] rounded-md h-[430px] grid place-items-center text-center">
          <h1 className="text-5xl">Aids will be provided here</h1>
        </div>
      </div>
    </>
  );
};

export default LifeStyleCategory;
