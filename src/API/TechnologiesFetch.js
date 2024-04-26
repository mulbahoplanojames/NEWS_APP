import axios from "axios";

const API_KEY = `cad4e48775144d4ea89d55008e356eb1`;
const API_URL = `https://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}`;

export const handleTechnologyFetch = (news, setNews) => {
  axios
    .get(API_URL)
    .then((response) => {
      setNews({
        ...news,
        title: response.data.articles[17].title,
        author: response.data.articles[17].author,
        description: response.data.articles[17].description,
        image: response.data.articles[17].urlToImage,
        publishAt: response.data.articles[17].publishedAt,
      });
      console.log(response.data.articles[6].title);
    })
    .catch((error) => {
      console.log(error);
    });
};
