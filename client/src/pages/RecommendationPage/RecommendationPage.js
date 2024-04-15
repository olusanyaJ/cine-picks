import Header from "../../components/Header/Header";
import "./RecommendationPage.css";
import { Link } from "react-router-dom";
import Recommendations from "../../components/Recommendations/Recommendations";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RecommendationPage = () => {
  const genreSelected = sessionStorage.getItem("genreSelected");
  const regionSelected = sessionStorage.getItem("regionSelected");
  const durationSelected = sessionStorage.getItem("durationSelected");
  const movieTypeSelected = sessionStorage.getItem("movieTypeSelected");

  const navigate = useNavigate();

  useEffect(() => {
    if (
      !(
        genreSelected &&
        regionSelected &&
        durationSelected &&
        movieTypeSelected
      )
    ) {
      navigate("/");
      return;
    }
  }, [
    genreSelected,
    regionSelected,
    durationSelected,
    movieTypeSelected,
    navigate,
  ]);

  if (
    !(genreSelected && regionSelected && durationSelected && movieTypeSelected)
  ) {
    return;
  }

  return (
    <div className="main">
      <Header />
      <div className="container px-6">
        <h1 className="font-bold text-2xl text">Welcome</h1>
        <div className="flex justify-between items-center py-6">
          <p className="font-normal">Here are some suggestions</p>
          <Link to="/" className="btn">
            Edit
          </Link>
        </div>
      </div>
      <Recommendations />
    </div>
  );
};

export default RecommendationPage;
