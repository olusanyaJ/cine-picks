import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./PreferencesPage.css";

const genreList = [
  "Action",
  "Adventure",
  "Animation",
  "Children & Family",
  "Classics",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Musical",
  "Mystery",
  "Nature",
  "Romance",
  "Sci-fi",
  "Sports",
  "Thriller",
  "War",
];

const regionList = ["Africa", "Asia", "South - America", "Eastern", "Western"];
const durationList = [
  "< 20 minutes",
  "< 60 minutes",
  "< 120 minutes",
  "3 - 4 hours",
  "4+ hours",
];
const movieTypeList = ["TV Shows", "Movies", "Trailers"];
const PreferencesPage = () => {
  return (
    <div>
      <Header />
      <div className="container px-6">
        <h1 className="">What piques your fancy, Jane?</h1>
        <div className="preferences">
          <div className="preference">
            <p className="preference-title">Choose a Genre</p>
            <ul className="preference-list">
              {genreList.map((genreListItem, index) => (
                <li
                  key={index}
                  className=""
                  onClick={() => {
                    console.log("pressed");
                  }}
                >
                  {genreListItem}
                </li>
              ))}
            </ul>
          </div>

          <div className="preference">
            <p className="preference-title">Choose a Region</p>
            <ul className="preference-list">
              {regionList.map((regionListItem, index) => (
                <li
                  key={index}
                  className=""
                  onClick={() => {
                    console.log("pressed");
                  }}
                >
                  {regionListItem}
                </li>
              ))}
            </ul>
          </div>

          <div className="preference">
            <p className="preference-title">Choose a Duration</p>
            <ul className="preference-list">
              {durationList.map((durationListItem, index) => (
                <li
                  key={index}
                  className=""
                  onClick={() => {
                    console.log("pressed");
                  }}
                >
                  {durationListItem}
                </li>
              ))}
            </ul>
          </div>

          <div className="preference">
            <p className="preference-title">Preferred Watch</p>
            <ul className="preference-list">
              {movieTypeList.map((movieTypeListItem, index) => (
                <li
                  key={index}
                  className=""
                  onClick={() => {
                    console.log("pressed");
                  }}
                >
                  {movieTypeListItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          to=""
          className=""
          onClick={() => {
            console.log("selected");
          }}
        >
          Confirm Preferences
        </Link>
      </div>
    </div>
  );
};

export default PreferencesPage;
