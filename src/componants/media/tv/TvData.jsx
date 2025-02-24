import { Link, useNavigate } from "react-router-dom";

function TvData({ media }) {
  const navigate = useNavigate();
  const type = "tv";

  const handleClick = (season) => {
    navigate(`/${type}/${season.id}`);
    window.location.reload();
  };
  if (!media || !media.backdrop_path || !media.poster_path) {
    return (
      <div className="h-svh w-full bg-black text-white flex flex-col items-center justify-center">
        <img src="../../../../public/rb_889.png" alt="" className="w-50" />
        <p>Not available now</p>
        <Link
          to={"/"}
          className="mt-3 py-2 px-3 bg-red-400 text-black rounded-lg cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    );
  }
  return (
    <div className="bg-black">
      {/* Background Image and Main Content */}
      <div
        className="h-svh bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${media.backdrop_path})`,
        }}
      >
        <div className="flex items-center justify-start p-8 bg-black/50 bg-gradient-to-t from-black/90 via-black/30 to-black/10 w-full h-full">
          <div className="lg:ml-8 lg:w-1/2 text-white">
            <h1 className="text-4xl font-bold">{media.name}</h1>
            <div className="flex gap-5 items-center my-3">
              <p>{media.vote_average}</p>
              <p>{media.first_air_date}</p>
            </div>
            <p className="mt-4 text-sm text-neutral-300 lg:text-[15px]">{media.overview}</p>
          </div>
        </div>
      </div>

      {/* Seasons Section */}
      {media.seasons && media.seasons.length > 0 && (
        <div className="w-[90%] m-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">Seasons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {media.seasons.map((season) => (
              <div
                onClick={() => handleClick(season)} // Fixed: Pass a callback function
                refresh="true"
                key={season.id}
                className="relative rounded-lg p-4 cursor-pointer group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={
                      season.poster_path
                        ? `https://image.tmdb.org/t/p/w500${season.poster_path}`
                        : "../../../../public/404 not found - Wallpaper Black.jpeg"
                    }
                    alt={`${season.name} Poster`}
                    className={`w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-300 ${season.poster_path ? "" : "border-1 border-white"}`}
                  />{" "}
                </div>
                <h3 className="text-xl font-semibold mt-2 text-white transition-all duration-300 group-hover:text-red-500">
                  {season.name}
                </h3>
                <p className="text-gray-400">
                  Episodes: {season.episode_count}
                </p>
                <p className="text-gray-400">Air Date: {season.air_date}</p>
                <p
                  className={`text-black ${
                    season.vote_average > 0
                      ? "absolute top-7 right-7 rounded bg-yellow-300 p-1"
                      : ""
                  }`}
                >
                  {parseFloat(season.vote_average.toFixed(1))}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TvData;
