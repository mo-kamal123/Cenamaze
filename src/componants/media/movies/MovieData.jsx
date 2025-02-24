import { useEffect, useState } from "react";
import Modal from "../../Modal";

import MovieCast from "./MovieCast";
import MovieGenre from "./MovieGenre";
import HomeSliders from "../../HomeSliders";
import Spinner from "../../Spinner";

function MovieData({ media }) {
  const [videos, setVideos] = useState([]);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [trailerKey, setTrailerKey] = useState(null); // State for trailer video key

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQwM2M3YTBkZmQyN2YwYTkyOTJmMDkyNDkyZTkwZiIsIm5iZiI6MTczNjcwMDc5MC4xMzIsInN1YiI6IjY3ODNmMzc2MDY5MGFjMDZlNzdiNWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8HnEC3yGmDoSxhyfi4ObtEE3iWap_lD5yBsFbAewxM",
    },
  };

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${media.id}/videos`,
        options
      );
      const data = await response.json();
      console.log("API Response:", data); // Debugging: Log the API response
      setVideos(data.results);
      setIsLoading(false);

      // Find the trailer video
      const trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        setTrailerKey(trailer.key); // Set the trailer key
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const getMovieCast = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${media.id}/credits?language=en-US`,
        options
      );
      const data = await response.json();
      console.log("API Response:", data); // Debugging: Log the API response
      let actors = data.cast.filter((actor) => actor.profile_path)
      console.log(actors); // Debugging: Log the API response
      setCast(actors);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!media) return;
    getMovieVideos();
    getMovieCast();
  }, [media]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (isLoading && !media) {
    return <div className="text-center text-9xl bg-black w-full h-svh text-red-700"><Spinner /></div>;
  }

  return (
    <div
      className="h-fit bg-black"
    >
      <div className="h-svh bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${media.backdrop_path})`,
            }}
      >
      <div className="flex items-center justify-start p-8 bg-black/50 bg-gradient-to-t from-black/90 via-black/30 to-black/10 w-full h-full">
        <div className="lg:ml-8 w-full lg:w-1/2 text-white">
          <h1 className="text-4xl font-bold">{media.original_title}</h1>
          <div className="flex gap-5 items-center my-3">
            <p>{media.vote_average}</p>
            <p>{media.runtime}min</p>
            <p>{media.release_date}</p>
          </div>
          <p className="mt-4 text-sm text-neutral-300 lg:text-[15px]">{media.overview}</p>
          <button
            onClick={openModal}
            className="flex items-center gap-3 mt-3 transition-all duration-300 cursor-pointer hover:text-red-500"
          >
            <div className="border-2 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-player-play"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 4v16l13 -8z" />
              </svg>
            </div>
            <p>Trailer</p>
          </button>
        </div>
      </div>

      <div className="genres bg-black pb-20">
        <MovieGenre media={media} />
      </div>
      <div className="cast  bg-black text-white">
          <MovieCast cast={cast} />
      </div>
      <div className="similar bg-black py-10 text-white">
        <HomeSliders sectionName={"Similar Movies"} url={`https://api.themoviedb.org/3/movie/${media.id}/similar?language=en-US&page=1`} />
      </div>

      {/* Render the TrailerModal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        trailerKey={trailerKey}
      />
      </div>


    </div>
  );
}

export default MovieData;
