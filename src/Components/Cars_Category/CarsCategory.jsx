import { Link } from "react-router-dom";

import car1 from "/src/assets/car1.jpg";
import car2 from "/src/assets/car2.jpg";
import car3 from "/src/assets/car3.jpg";
import car4 from "/src/assets/car4.jpg";

const CarsCategory = () => {
  return (
    <>
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-5">
        <div className=" h-[430px] rounded-lg overflow-hidden shadow-lg">
          <img src={car2} alt={"Car image"} className="w-full h-full" />
        </div>

        <div className="h-fit ">
          <div className="h-fit flex justify-between gap-3 mb-4 overflow-hidden">
            <div className="h-[130px] w-[250px] bg-green-700 rounded-md overflow-hidden">
              <img src={car3} alt={"car image"} className="w-full h-full" />
            </div>
            <div className="">
              <h1 className="pb-2 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur
              </h1>
              <p className="pb-1 font-semibold">Author : Solomon</p>
              <p className="font-semibold">Date : June 5 2043, 11:23</p>
            </div>
          </div>

          <div className="h-fit flex justify-between gap-3 mb-4">
            <div className="h-[130px] w-[250px] rounded-md overflow-hidden">
              <img src={car4} alt={"car image"} className="w-full h-full" />
            </div>
            <div className="">
              <h1 className="pb-2 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur
              </h1>
              <p className="pb-1 font-semibold">Author : Mulbah Oplano</p>
              <p className="font-semibold">Date : June 5 2043, 11:23</p>
            </div>
          </div>

          <div className="h-fit flex justify-between gap-3">
            <div className="h-[130px] w-[250px] rounded-md overflow-hidden">
              <img src={car1} alt={"car image"} className="w-full h-full" />
            </div>
            <div className="">
              <h1 className="pb-2 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur
              </h1>
              <p className="pb-1 font-semibold">Author : Abdalla </p>
              <p className="font-semibold">Date : June 5 2043, 11:23</p>
            </div>
          </div>
        </div>

        <div className="bg-[#eaeef3] rounded-md h-[430px] grid place-items-center text-center">
          <h1 className="text-5xl">Aids will be provided here</h1>
        </div>
      </div>
      <Link to={"/home"}>
        <h1 className="text-3xl">All Category</h1>
      </Link>
    </>
  );
};

export default CarsCategory;
