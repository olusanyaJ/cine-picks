import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreferencesPage from "../src/pages/PreferencesPage/PreferencesPage";
import FilmDetailsPage from "../src/pages/FilmDetailsPage/FilmDetailsPage";
import RecommendationPage from "../src/pages/RecommendationPage/RecommendationPage";
const App = () => {
  return (
    // <div>
    //   <h1 className="text-3xl mt-16 font-bold underline">cinePicks</h1>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/recommendations" element={<RecommendationPage />}></Route>
        <Route path="/details" element={<FilmDetailsPage />}></Route>
        <Route path="/" element={<PreferencesPage />}></Route>
        {/* <Route path="/loading" element={<LoadingComp />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
