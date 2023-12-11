import axios from "axios";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/news")
      .then(({ data }) => setNews(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
    <div className="text-white mt-32 bg-black">
        {news.map(({ id, attributes }) => (
          <div key={id} className="list-none p-4 text-white flex">
            {id}
            <div className="ml-2">
              {attributes.title}
            </div>
            <p className="ml-2">
              {attributes.body}
            </p>           
          </div>
          
        ))}
    </div>
    <div className="text-8xl text-white bg-black mt-32"> NEWS PAGE</div>
    </>
  )
};

export default NewsPage;