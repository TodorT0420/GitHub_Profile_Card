import axios from "axios";
import { useEffect, useState } from "react";
import { RANDOM_QUOTE_API_KEY } from "../../common/constants";

const Quotes = () => {
  const [data, setData] = useState([]);
  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchQuote = async () => {
      const result = await axios.get(RANDOM_QUOTE_API_KEY);
      setData(result.config);
    }
    
    fetchQuote();
}, []);

console.log(data)
  return <div>Quotes</div>;
};

export default Quotes;
