import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./PreferencesPage.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PreferencesPage = () => {
  const [genreSelected, setGenreSelected] = useState([]);
  const [regionSelected, setRegionSelected] = useState([]);
  const [durationSelected, setDurationSelected] = useState([]);
  const [movieTypeSelected, setMovieTypeSelected] = useState([]);

  const [genreError, setGenreError] = useState(false);
  const [regionSelectError, setRegionSelectError] = useState(false);
  const [durationSelectError, setDurationSelectError] = useState(false);
  const [movieTypeSelectError, setMovieTypeSelectError] = useState(false);

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
  const regionList = [
    "Africa",
    "Asia",
    "South - America",
    "Eastern",
    "Western",
  ];
  const durationList = [
    "< 20 minutes",
    "< 60 minutes",
    "< 120 minutes",
    "3 - 4 hours",
    "4+ hours",
  ];
  const movieTypeList = ["TV Shows", "Movies", "Trailers"];

  const handleGenreSelect = (event) => {
    const genre = event.target.innerText;
    const updatedGenres = genreSelected.includes(genre)
      ? genreSelected.filter((selectedGenre) => selectedGenre !== genre)
      : [...genreSelected, genre];
    setGenreSelected(updatedGenres);
    setGenreError(false);
  };

  const handleRegionSelect = (event) => {
    const region = event.target.innerText;
    const updatedRegions = regionSelected.includes(region)
      ? regionSelected.filter((selectedRegion) => selectedRegion !== region)
      : [...regionSelected, region];
    setRegionSelected(updatedRegions);
    setRegionSelectError(false);
  };

  const handleDurationSelect = (event) => {
    const duration = event.target.innerText;
    const updatedDurations = durationSelected.includes(duration)
      ? durationSelected.filter(
          (selectedDuration) => selectedDuration !== duration
        )
      : [...durationSelected, duration];
    setDurationSelected(updatedDurations);
    setDurationSelectError(false);
  };

  const handleMovieTypeSelect = (event) => {
    const movieType = event.target.innerText;
    const updatedmovieTypes = movieTypeSelected.includes(movieType)
      ? movieTypeSelected.filter(
          (selectedRegion) => selectedRegion !== movieType
        )
      : [...movieTypeSelected, movieType];
    setMovieTypeSelected(updatedmovieTypes);
    setMovieTypeSelectError(false);
  };

  const isGenreSelected = (genre) => {
    return genreSelected.includes(genre);
  };

  const isRegionSelected = (region) => {
    return regionSelected.includes(region);
  };

  const isDurationSelected = (duration) => {
    return durationSelected.includes(duration);
  };

  const isMovieTypeSelected = (movieType) => {
    return movieTypeSelected.includes(movieType);
  };

  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    if (genreSelected.length === 0) {
      setGenreError(true);
      return;
    }
    if (regionSelected.length === 0) {
      setRegionSelectError(true);
      return;
    }
    if (durationSelected.length === 0) {
      setDurationSelectError(true);
      return;
    }
    if (movieTypeSelected.length === 0) {
      setMovieTypeSelectError(true);
      return;
    }
    sessionStorage.setItem("genreSelected", genreSelected);
    sessionStorage.setItem("regionSelected", regionSelected);
    sessionStorage.setItem("durationSelected", durationSelected);
    sessionStorage.setItem("movieTypeSelected", movieTypeSelected);
    // console.log("genreSelected: ", genreSelected);
    // console.log("regionSelected: ", regionSelected);
    // console.log("durationSelected: ", durationSelected);
    // console.log("movieTypeSelected: ", movieTypeSelected);
    // setIsLoading(true);
    navigate("/recommendations");
  };

  return (
    <div className="main">
      <Header />
      <div className="container px-6">
        <h1 className="mb-4 font-normal text-base">
          Hello, what piques your fancy today?
        </h1>
        <div className="preferences">
          <div className="mt-2">
            <p
              className={`text-base font-medium leading-5 mb-3 ${
                genreError ? "font-black text-3xl text-red-500" : ""
              }`}
            >
              Choose a Genre
            </p>
            <ul className="flex flex-wrap">
              {genreList.map((genreListItem, index) => (
                <li
                  key={index}
                  onClick={handleGenreSelect}
                  className={`m-2 py-2 px-4 text-sm font-normal leading-5 preference-type ${
                    isGenreSelected(genreListItem)
                      ? "bg-white outline outline-orange-500/50"
                      : ""
                  }`}
                >
                  {genreListItem}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3">
            <p
              className={`text-base font-medium leading-5 mb-3 ${
                regionSelectError ? "font-black text-3xl text-red-500" : ""
              }`}
            >
              Choose a Region
            </p>
            <ul className="flex flex-wrap">
              {regionList.map((regionListItem, index) => (
                <li
                  key={index}
                  className={`m-2 py-2 px-4 text-sm font-normal leading-5 preference-type ${
                    isRegionSelected(regionListItem)
                      ? "bg-white outline outline-orange-500/50"
                      : ""
                  }`}
                  onClick={handleRegionSelect}
                >
                  {regionListItem}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3">
            <p
              className={`text-base font-medium leading-5 mb-3 ${
                durationSelectError ? "font-black text-3xl text-red-500" : ""
              }`}
            >
              Choose a Duration
            </p>
            <ul className="flex flex-wrap">
              {durationList.map((durationListItem, index) => (
                <li
                  key={index}
                  className={`m-2 py-2 px-4 text-sm font-normal leading-5 preference-type ${
                    isDurationSelected(durationListItem)
                      ? "bg-white outline outline-orange-500/50"
                      : ""
                  }`}
                  onClick={handleDurationSelect}
                >
                  {durationListItem}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 pb-20">
            <p
              className={`text-base font-medium leading-5 mb-3 ${
                movieTypeSelectError ? "font-black text-3xl text-red-500" : ""
              }`}
            >
              Preferred Watch
            </p>
            <ul className="flex flex-wrap">
              {movieTypeList.map((movieTypeListItem, index) => (
                <li
                  key={index}
                  className={`m-2 py-2 px-4 text-sm font-normal leading-5 preference-type ${
                    isMovieTypeSelected(movieTypeListItem)
                      ? "bg-white outline outline-orange-500/50"
                      : ""
                  }`}
                  onClick={handleMovieTypeSelect}
                >
                  {movieTypeListItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          to=""
          className="font-normal border-0 rounded-lg p-2 preferences-btn text-white"
          onClick={handleClick}
        >
          Confirm Preferences
        </Link>
      </div>
    </div>
  );
};

export default PreferencesPage;
