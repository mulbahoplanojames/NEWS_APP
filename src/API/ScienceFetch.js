import axios from "axios";

const API_KEY = `cad4e48775144d4ea89d55008e356eb1`;
const API_URL = `https://newsapi.org/v2/everything?q=health&apiKey=${API_KEY}`;

export const handleScienceFetch = (scienceNews, setScienceNews) => {
  axios
    .get(API_URL)
    .then((response) => {
      setScienceNews({
        ...scienceNews,
        title: response.data.articles[3].title,
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
