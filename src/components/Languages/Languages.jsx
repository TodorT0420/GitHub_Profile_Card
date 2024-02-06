import CSS from "../../assets/css.png";
import Ruby from "../../assets/ruby.png";
import TypeScript from "../../assets/typescript.png";
import JavaScript from "../../assets/javascript.png";
import Erlang from "../../assets/erlang.png";
import C from "../../assets/C.png";
import Perl from "../../assets/perl.png";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const Languages = ({ languages }) => {
  const filteredLanguages = languages.filter(
    (language) => language !== "Scheme" && language !== null
  );

  const uniqueLanguages = [...new Set(filteredLanguages)];

  const languageIcons = {
    CSS: CSS,
    Ruby: Ruby,
    TypeScript: TypeScript,
    JavaScript: JavaScript,
    Erlang: Erlang,
    C: C,
    Perl: Perl,
  };

  return (
    <div className="">
      <p>Used Languages</p>
      <div className="flex items-center ml-9">
        <span className="text-xs mr-2">Scroll</span>
        <span>
          <FaArrowRight className="animate-pulse inline text-sm" />
        </span>
      </div>
      <div className="w-20 ml-5 carousel rounded-box">
        {uniqueLanguages.map((language, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={languageIcons[language]}
              className="w-full"
              alt={`${language} icon`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Languages.propTypes = {
  languages: PropTypes.array,
};

export default Languages;
