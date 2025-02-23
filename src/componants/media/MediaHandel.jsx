import { useParams } from "react-router-dom";
import MovieDetails from "./movies/MovieDetails";
import TvDetails from "./tv/TvDetails";
import PersonDetails from "./persons/PersonDetails";

function MediaHandel() {
  const { type, id } = useParams();
  console.log(id, type);
  if (type === "movie") {
    return <MovieDetails id={id} />;
  } else if (type === "tv") {
    return <TvDetails id={id} />;
  } else if (type === "person") {
    return <PersonDetails id={id} />;
  }
  return <div>MovieDetails</div>;
}

export default MediaHandel;
