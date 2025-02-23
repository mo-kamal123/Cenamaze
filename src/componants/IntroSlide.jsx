import { Link } from "react-router-dom";

function IntroSlide({ movie }) {
  return (
    <div
      className="h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
      }}
    >
      <div className="flex lg:flex-row flex-col justify-end  lg:justify-start lg:items-end p-8 bg-black/50 bg-linear-to-t from-black/90 via-black/30 to-black/10 w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          className="w-36 lg:w-48 lg:h-64 rounded-2xl object-cover lg:ml-10"
        />
        <div className="flex flex-col lg:ml-8 lg:w-1/2 text-white">
          <h1 className="text-2xl lg:text-4xl font-bold">{movie.original_title}</h1>
          <p className="text-sm text-neutral-300 lg:text-base mt-4">{movie.overview.split(" ").slice(0,19).join(" ")}.......</p>
          <p className="my-2">Rating: {parseFloat(movie.vote_average.toFixed(1))}</p>
          <Link
            to={`/movie/${movie.id}`}
            className="w-fit mt-8 px-6 py-2 border-2 text-sm font-light transition-all duration-300 border-red-500 hover:bg-red-500 rounded"
          >
            MORE DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroSlide;
