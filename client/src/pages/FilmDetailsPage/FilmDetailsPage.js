import "./FilmDetailsPage.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import backIcon from "../../assets/icon-back.png";
import movieImg from "../../assets/images/Rectangle14.png";
import RecommendationSlider from "../../components/RecommendationSlider/RecommendationSlider";

const FilmDetailsPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="px-6 flex flex-row items-center">
        <Link to="/recommendations" className="">
          <img src={backIcon} alt="backIcon" />
        </Link>
        <p className="pl-14">Shadow Protocol</p>
      </div>
      <img src={movieImg} alt="movieImg" className="w-full" />
      <div className="px-6">
        <p className="pt-6 pb-6 font-normal leading-5 text-sm text">
          In the heart of present-day New York, unfolds the intense story of
          Alex Mercer, an up-and-coming spy armed with cutting-edge technology
          and unwavering courage. Recruited by a mysterious government agency,
          Alex dives into a web of corruption reaching the highest echelons of
          power, orchestrated by a charismatic but nefarious mastermind. As the
          city's last line of defence, Alex navigates iconic landmarks, facing
          betrayal and shifting alliances.
        </p>
        <Link
          to="/"
          className="watch-btn font-normal border-0 rounded-lg p-2 text-white"
        >
          Watch Now
        </Link>
      </div>
      <div className="pl-6 pt-4 pb-4">
        <p className="pl-4 pb-2 font-normal leading-5 text">
          Similar Recommendations
        </p>
        <RecommendationSlider />
      </div>
    </div>
  );
};

export default FilmDetailsPage;
