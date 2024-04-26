import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/Context";
import { handleSportFetch } from "../../API/SportFetch";
import { newObject } from "../../Data/Data";
import { handleTechnologyFetch } from "../../API/TechnologiesFetch";
import { handleEntertainmentFetch } from "../../API/EntertainmentFetch";
import { handleBitcoinFetch } from "../../API/Bitcoins";

// Component for the home hero component
const Hero = () => {
  //! I am accessing the `darkMode` state from the `AppContext`
  const { darkMode } = useContext(AppContext);

  //! State to hold the news from the API, i am getting the `newObject` from the `Data/Data.js`
  const [sportNews, setSportNews] = useState(newObject);
  const [bitcoinNews, setBitcoinNews] = useState(newObject);
  const [technologyNews, setTechnologyNews] = useState(newObject);
  const [entertainmentNews, setEntertainmentNews] = useState(newObject);

  //! Use effect to fetch the news from the API on the first mount or render
  // useEffect(() => {
  //   handleSportFetch(sportNews, setSportNews);
  //   handleBitcoinFetch(bitcoinNews, setBitcoinNews);
  //   handleTechnologyFetch(technologyNews, setTechnologyNews);
  //   handleEntertainmentFetch(entertainmentNews, setEntertainmentNews);
  // }, [sportNews, bitcoinNews, technologyNews, entertainmentNews]);

  //! shotten the title if it's too long
  if (sportNews.title.length > 50) {
    sportNews.title = sportNews.description.slice(0, 80) + "...";
  } else if (bitcoinNews.title.length > 50) {
    bitcoinNews.title = bitcoinNews.description.slice(0, 80) + "...";
  } else if (technologyNews.title.length > 50) {
    technologyNews.title = technologyNews.description.slice(0, 80) + "...";
  } else if (entertainmentNews.title.length > 50) {
    entertainmentNews.title =
      entertainmentNews.description.slice(0, 80) + "...";
  } else {
    sportNews.title = sportNews.title + "...";
    bitcoinNews.title = bitcoinNews.title + ".......";
    technologyNews.title = technologyNews.title + ".......";
    entertainmentNews.title = entertainmentNews.title + ".......";
  }

  return (
    <>
      {/* main hero wrapper div */}
      <div className="md:grid-cols-1 lg:grid-cols-2 grid grid-cols-1 gap-12 mb-16">
        {/* The first news card */}
        <div className={`h-fit ${darkMode ? "shadow-none" : "shadow-xl"} `}>
          <div className="bg-blue-500  h-[280px] overflow-hidden">
            <img src={bitcoinNews.image} alt="" className="w-full h-full" />
          </div>
          <div className=" px-2 pb-4">
            <h1 className="pt-3 pb-1 text-2xl font-bold">
              {bitcoinNews.title}
            </h1>
            <p className="pb-1 text-base">Author: {bitcoinNews.author}</p>
            <p className=" text-base">
              Date Posted: {Date(bitcoinNews.publishAt)}
            </p>
          </div>
        </div>

        {/* second grid child div */}
        <div className="h-fit">
          <div className="grid grid-cols-2 gap-8">
            {/* The second news card */}
            <div className="h-[240px]  rounded-md overflow-hidden shadow-lg">
              <div className="h-[140px] bg-fuchsia-700">
                <img
                  src={entertainmentNews.image}
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <p className="pt-2 text-base">{entertainmentNews.title}</p>
            </div>

            {/* The third news card */}
            <div className="h-[240px]  rounded-md overflow-hidden  shadow-lg">
              <div className="h-[140px] bg-red-700">
                <img src={sportNews.image} alt="" className="w-full h-full" />
              </div>
              <p className="pt-2 text-base">{sportNews.title}</p>
            </div>
          </div>

          {/* The fourth news card */}
          <div className="h-fit flex gap-2 mt-5 rounded-md shadow-xl">
            <div className="h-[160px] ">
              <img
                src={technologyNews.image}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="text-right">
              <h1 className=" pt-3 pb-2 pr-2 text-[19px] font-bold">
                {technologyNews.title}
              </h1>
              <p>{Date(technologyNews.publishAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
