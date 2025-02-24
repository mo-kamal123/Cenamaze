import FetchMediaData from "../FetchMediaData";

function MovieDetails({ id }) {
  return (
    <div>
      <FetchMediaData
        type={"movie"}
        url={`https://api.themoviedb.org/3/movie/${id}?language=en-US`}
      />
    </div>
  );
}

export default MovieDetails;
