import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = `cad4e48775144d4ea89d55008e356eb1`;
const API_URL = `https://newsapi.org/v2/everything?q=sport&from=2024-03-20-&sortBy=popularity&apiKey=${API_KEY}`;

const Hero = () => {
  const [news, setNews] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    publishAt: "",
  });

  const habdleFetch = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setNews({
          ...news,
          title: response.data.articles[9].title,
          author: response.data.articles[1].author,
          description: response.data.articles[2].description,
          image: response.data.articles[6].urlToImage,
          publishAt: response.data.articles[4].publishedAt,
        });
        console.log(response.data.articles[6].title);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    habdleFetch();
  }, []);

  if (news.title.length > 50) {
    news.title = news.description.slice(0, 80) + "...";
  }

  return (
    <>
      <div className="md:grid-cols-2 grid grid-cols-1 gap-12">
        {/* One  */}
        <div className=" h-fit">
          <div className="bg-blue-500  h-[280px] overflow-hidden">
            <img src={news.image} alt="" className="w-full h-full" />
          </div>
          <div className=" px-2 pb-4">
            <h1 className="pt-3 pb-1 text-2xl font-bold">{news.title}</h1>
            <p className="pb-1 text-base">Author: {news.author}</p>
            <p className=" text-base">Date Posted: {Date(news.publishAt)}</p>
          </div>
        </div>
        {/* // two */}
        <div className="h-fit">
          <div className="grid grid-cols-2 gap-8">
            <div className="h-[220px]  rounded-md overflow-hidden">
              <div className="h-[170px] bg-fuchsia-700">
                <img src={news.image} alt="" className="w-full h-full" />
              </div>
              <p className="pt-1 text-base">Author:{news.author}</p>
              <p className="pt-1 text-base">
                Publish at:{Date(news.publishAt)}
              </p>
            </div>
            <div className="h-[220px]  rounded-md overflow-hidden">
              <div className="h-[170px] bg-red-700">
                <img src={news.image} alt="" className="w-full h-full" />
              </div>
              <p className="pt-3 text-base">Author: {news.author}</p>
            </div>
          </div>

          <div className="h-fit flex gap-2 mt-3 rounded-md">
            <div className="h-[170px] bg-red-700">
              <img src={news.image} alt="" className="w-full h-full" />
            </div>
            <div className="text-right">
              <h1 className=" pt-3 pb-2 pr-2 text-[19px] font-bold">
                {news.title}
              </h1>
              <p className="pb-1 text-base">{news.author}</p>
              <p>{Date(news.publishAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
