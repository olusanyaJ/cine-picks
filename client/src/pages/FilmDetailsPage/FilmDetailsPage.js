import "./FilmDetailsPage.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import backIcon from "../../assets/icon-back.png";
import movieImg from "../../assets/images/Rectangle14.png";

const FilmDetailsPage = () => {
  return (
    <div>
      <Header />
      <div className="px-6 flex flex-row items-center">
        <Link to="/recommendations" className="details--icon">
          <img src={backIcon} alt="backIcon" className="icon-img" />
        </Link>
        <p className="pl-14">Shadow Protocol</p>
      </div>
      <img src={movieImg} alt="movieImg" className="details-img" />
      <div className="px-6">
        <p className="details-desc">
          In the heart of present-day New York, unfolds the intense story of
          Alex Mercer, an up-and-coming spy armed with cutting-edge technology
          and unwavering courage. Recruited by a mysterious government agency,
          Alex dives into a web of corruption reaching the highest echelons of
          power, orchestrated by a charismatic but nefarious mastermind. As the
          city's last line of defence, Alex navigates iconic landmarks, facing
          betrayal and shifting alliances.
        </p>
        <Link to="/" className="details-link">
          Watch Now
        </Link>

        <div className="recommendations">
          <div className="recommendation">
            <p className="recommendation-genre">Similar Recommendations</p>
            {/* <RecommendationSlider /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetailsPage;
