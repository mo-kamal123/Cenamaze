import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the movie details route with the movie ID
    navigate(`/${movie.media_type || type}/${movie.id}`);
  };
  let type = null;
  const checkType = (movie) => {
    if (movie.first_air_date) {
      return (type = "tv");
    } else {
      return (type = "movie");
    }
  };
  checkType(movie);
  return (
    <div className="py-7 relative cursor-pointer group " onClick={handleClick}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-300"
          // src={`https://image.tmdb.org/t/p/w500/${
          //   movie.poster_path || movie.profile_path
          // }`}
          src={
            movie.poster_path || movie.profile_path
              ? `https://image.tmdb.org/t/p/w500/${
                movie.poster_path || movie.profile_path
              }`
              : "../../../../public/404 not found - Wallpaper Black.jpeg"
          }
          alt="media img"
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold mt-2 text-white transition-all duration-300 group-hover:text-red-500">
          {movie.title || movie.name}
        </h1>
        {movie.vote_average > 1 && (
          <p className="absolute top-9 right-2 text-black rounded bg-yellow-300 p-1">
            {parseFloat(movie.vote_average.toFixed(1))}
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
