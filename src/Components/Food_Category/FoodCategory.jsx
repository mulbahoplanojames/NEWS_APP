import { Link } from "react-router-dom";

import bitcoin from "/src/assets/food1.jpg";
import car from "/src/assets/food.jpg";
import food from "/src/assets/food2.jpg";
import sport from "/src/assets/food4.jpg";

const FoodCategory = () => {
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
                Increase your health by eating these 7 healthful foods every day
                and it will benefit you.
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
                All the best food you need to have or eat in one big meal with a
                good nutrient and...
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
                All of the best cakes you need to have or eat in one big meal
                with a good nutrient....
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

export default FoodCategory;
