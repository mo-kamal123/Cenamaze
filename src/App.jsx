import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Home from "./componants/Home";
import NowMovies from "./componants/media/movies/NowMovies";
import PopularMovies from "./componants/media/movies/PopularMovies";
import TopMovies from "./componants/media/movies/TopMovies";
import UpcomingMovies from "./componants/media/movies/UpcomingMovies";
import AiringTv from "./componants/media/tv/AiringTv";
import OnAirTv from "./componants/media/tv/OnAirTv";
import PopularTv from "./componants/media/tv/PopularTv";
import TopTv from "./componants/media/tv/TopTv";
import GenreHandel from "./componants/media/GenreHandel";
import HomeTrending from "./componants/HomeTrending";
import SearchResult from "./componants/SearchResult";
import MediaHandel from "./componants/media/MediaHandel";
import Home from "./componants/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<MediaHandel />} />
        <Route path="/movies/playing-now" element={<NowMovies />} />
        <Route path="/movies/popular" element={<PopularMovies />} />
        <Route path="/movies/top-rated" element={<TopMovies />} />
        <Route path="/movies/upcoming" element={<UpcomingMovies />} />
        <Route path="/trending" element={<HomeTrending />} />
        <Route path="/tv/airing" element={<AiringTv />} />
        <Route path="/tv/on-The-Air" element={<OnAirTv />} />
        <Route path="/tv/popular" element={<PopularTv />} />
        <Route path="/tv/top-rated" element={<TopTv />} />
        <Route path="/genres" element={<GenreHandel />} />
        <Route path="/search/:search" element={<SearchResult />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
