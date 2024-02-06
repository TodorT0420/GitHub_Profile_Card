import { HiMiniUsers } from "react-icons/hi2";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";

import PropTypes from "prop-types";
import Languages from "../Languages/Languages";

const Card = ({ data }) => {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num;
    }
  };
  return (
    <div className="flex mb-8 items-center justify-center relative">
      {data && (
        <div className="p-5 rounded-lg shadow-violet-500 bg-zinc-700 shadow-2xl">
          <figure className="flex justify-center">
            <img
              className="flex rounded-full w-40 h-40 items-center justify-center"
              src={data.avatar_url}
              alt="Movie"
            />
          </figure>
          <div className="text-center">
            <h2 className="text-white text-center mt-4 font-serif font-bold">
              {data.name}
            </h2>
            <p className="text-gray-400 text-center font-bold">{data.login}</p>
          </div>
          <div className="mt-5 text-gray-500 text-center">
            <HiMiniUsers className="w-6 h-6 inline " /> Followers{" "}
            <span className="text-white font-serif">
              {formatNumber(data.followers)} &#183;{" "}
            </span>
            Following{" "}
            <span className="text-white font-serif">{formatNumber(data.following)}</span>
          </div>
          <div className="mt-7 text-gray-500 text-start flex items-start">
            <GoOrganization className="inline w-6 h-6 mr-1" />
            <span className="text-white font-serif">Organizations: </span>
            {data.organization.map((org, index) => (
              <span key={index} className="flex items-center ml-2">
                <img className="w-7 h-7" src={org.avatar} alt={org.name} />
                <span className="text-white ml-2 font-thin font-mono text-sm">{org.name}</span>
              </span>
            ))}
          </div>

          <div className="mt-3 text-gray-500 text-start">
            {" "}
            <RiGitRepositoryCommitsLine className="inline w-6 h-6 mr-1" />
            <span className="text-white font-serif">Repositories: {data.repos}</span>
          </div>
          <div className="mt-3 text-gray-500 text-start font-serif">
            {" "}
            <GoOrganization className="inline w-6 h-6 mr-1" />
            <span className="text-white">{data.companies}</span>
          </div>
          <div className="flex items-center justify-center font-serif text-white mt-5">
            <Languages languages={data.languages} />
          </div>
          <div className="flex justify-center mt-7">
            <button className="py-2 px-5 rounded-md font-bold cursor-pointer text-black bg-violet-400 hover:bg-violet-600 hover:shadow-slate-500 hover:shadow-xl hover:animate-pulse hover:text-white">
              <a href={data.html_url}>Go to profile</a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    html_url: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    repos: PropTypes.number,
    companies: PropTypes.string,
    languages: PropTypes.array,
    organization: PropTypes.array,
  }),
};

export default Card;
