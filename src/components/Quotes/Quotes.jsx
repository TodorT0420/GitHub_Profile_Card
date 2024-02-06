import axios from "axios";
import { useEffect, useState } from "react";
import { RANDOM_QUOTE_API_KEY } from "../../common/constants";

const Quotes = () => {
  const [data, setData] = useState([]);
  // const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchQuote = async () => {
      const result = await axios.get(RANDOM_QUOTE_API_KEY);

      setData(result.data);
    };

    fetchQuote();
  }, []);

  console.log(data);
  return <div></div>;
};

export default Quotes;

//ERROR
// Access to fetch at
// 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
//  from origin 'http://localhost:5173' 
//  has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
//  header is present on the requested resource.
//  If an opaque response serves your needs,
//   set the request's mode to 'no - cors' to fetch the resource with CORS disabled.