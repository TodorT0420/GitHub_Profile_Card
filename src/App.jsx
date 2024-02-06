import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import { GITHUB_USER_API_KEY } from "./common/constants";
import Loader from "./components/Loader/Loader";
// import BgImg from "./assets/bgIMG.png";
// import Quotes from "./components/Quotes/Quotes";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(GITHUB_USER_API_KEY);
        const userData = await axios.get(result.data.url);
        const usedLanguages = await axios.get(result.data.repos_url);
        const organizations = await axios.get(result.data.organizations_url);

        const organization = organizations.data.map((data) => ({
          avatar: data.avatar_url,
          name: data.login,
        }));
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        setData({
          ...result.data,
          repos: userData.data.public_repos,
          followers: userData.data.followers,
          following: userData.data.following,
          companies: userData.data.company,
          languages: usedLanguages.data.map((lang) => lang.language),
          organization,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="mt-10">
      <Card data={data} />
      {/* <Quotes/> */}
    </div>
  );
}
export default App;
