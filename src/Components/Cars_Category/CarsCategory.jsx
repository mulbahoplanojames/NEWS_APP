import { Link } from "react-router-dom";

const CarsCategory = () => {
  return (
    <>
      <h1>CarsCategory</h1>
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-5">
        <div className=" h-[430px] rounded-lg overflow-hidden shadow-lg">
          {/* <img src={bitcoin} alt={"bitcoin"} className="w-full h-full" /> */}
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

        <div className="bg-red-600 rounded-md h-[430px]">
          {/* <img src={bitcoin} alt={"bitcoin"} className="w-full h-full" /> */}
        </div>
      </div>
      <Link to={"/home"}>
        <h1 className="text-3xl">All Category</h1>
      </Link>
    </>
  );
};

export default CarsCategory;
