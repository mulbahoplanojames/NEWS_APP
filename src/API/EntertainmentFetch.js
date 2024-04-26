import axios from "axios";

const API_KEY = `cad4e48775144d4ea89d55008e356eb1`;
const API_URL = `https://newsapi.org/v2/everything?q=entertainment&apiKey=${API_KEY}`;

export const handleEntertainmentFetch = (news, setNews) => {
  axios
    .get(API_URL)
    .then((response) => {
      setNews({
        ...news,
        title: response.data.articles[4].title,
        author: response.data.articles[4].author,
        description: response.data.articles[4].description,
        image: response.data.articles[4].urlToImage,
        publishAt: response.data.articles[4].publishedAt,
      });
      console.log(response.data.articles[4].title);
    })
    .catch((error) => {
      console.log(error);
    });
};
