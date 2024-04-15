import RecommendationSlider from "../RecommendationSlider/RecommendationSlider";

const Recommendations = () => {
  const movieGenreArray = [
    "Action-Thriller",
    "Action-Crime",
    "Thriller",
    "Action-Mystery",
    "Comedy",
    "Crime",
    "Sports",
  ];
  return (
    <div className="pl-6 pb-4">
      {movieGenreArray.map((genre, index) => (
        <div className="pb-4" key={index}>
          <p className="pb-3">{genre}</p>
          <RecommendationSlider />
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
