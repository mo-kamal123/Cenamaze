import { useEffect, useState } from "react";

function PersonData({ media }) {
  const [personMovies, setPersonMovies] = useState([]);
  const [personTv, setPersonTv] = useState([]);
  const [active, setActive] = useState("movies");

  const options = {
    method: "GET", // Corrected: method is at the top level
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQwM2M3YTBkZmQyN2YwYTkyOTJmMDkyNDkyZTkwZiIsIm5iZiI6MTczNjcwMDc5MC4xMzIsInN1YiI6IjY3ODNmMzc2MDY5MGFjMDZlNzdiNWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8HnEC3yGmDoSxhyfi4ObtEE3iWap_lD5yBsFbAewxM",
    },
  };

  const getPersonMovies = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,
        options
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setPersonMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getPersonTv = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}/tv_credits?language=en-US`,
        options
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setPersonTv(data);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

  useEffect(() => {
    if (media && media.id) {
      getPersonMovies(media.id);
      getPersonTv(media.id);
    }
  }, [media]);

  return (
    <div className="w-full min-h-svh flex flex-col justify-center items-center bg-cover bg-center bg-black text-white">
      <div className="flex flex-col items-center mt-20 p-8">
        <div className="img w-30 h-30 rounded-full overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500/${media.profile_path}`}
            alt={media.original_title}
            className="w-40 object-cover"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">{media.name}</h1>
          <p className="mt-2">{media.place_of_birth}</p>
          <p className="mt-2">popularity: {media.popularity}</p>
        </div>
      </div>
      <div className="flex items-center border-b-2 border-red-500 mb-2">
        <div
          onClick={() => setActive("movies")}
          className={`movies py-2 px-4 ${
            active === "movies" ? "text-black bg-white" : "text-white"
          } transition-all duration-400`}
        >
          Movies
        </div>
        <div
          onClick={() => setActive("tv")}
          className={`tv py-2 px-4 ${
            active === "tv" ? "text-black bg-white" : "text-white bg-black"
          } transition-all duration-400`}
        >
          Tv Shows
        </div>
        <div
          onClick={() => setActive("bio")}
          className={`bio py-2 px-4 ${
            active === "bio" ? "text-black bg-white" : "text-white"
          } transition-all duration-400`}
        >
          Bio
        </div>
      </div>
      <div>
        {active === "movies" && (
          <div className={`w-[90%] my-2 m-auto transition-all duration-300 ${active === "movie" ? "opacity-0" : "opacity-100"}`}>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
              {personMovies.cast?.map((movie) => (
                <li className="relative" key={movie.id}>
                  <div className="overflow-hidden rounded-lg group">
                  <img className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-300" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                  </div>
                  <p className="mt-3">{movie.title}</p>
                  <div className="bg-yellow-300 px-2 py-1 text-black rounded-lg absolute top-2 right-2">{parseFloat(movie.vote_average.toFixed(1))}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {active === "tv" && (
          <div className={`w-[90%] m-auto transition-all duration-300 ${active === "tv" ? "opacity-100" : "opacity-0"}`}>
            <ul className="grid grid-cols-5 gap-10">
              {personTv.cast?.map((show) => (
                <li className="relative overflow-hidden rounded-lg" key={show.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt="" />
                  <p>{show.name}</p>
                  <div className="bg-yellow-300 px-2 py-1 text-black rounded-lg absolute top-2 right-2">{parseFloat(movie.vote_average.toFixed(1))}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {active === "bio" && (
          <div className={"w-[90%] m-auto my-10"}>
            <h2 className="text-3xl my-5 text-center">{media.name} Bio</h2>
            <p className="text-center text-neutral-400">{media.biography}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonData;
