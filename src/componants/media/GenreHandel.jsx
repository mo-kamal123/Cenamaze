import { Link, useParams } from "react-router-dom";
import Nav from "../Nav";
import { useEffect, useState } from "react";
import FetchSectionsData from "./FetchSectionsData";
import Spinner from "../Spinner";

function GenreHandel() {
  const [genreList, setGenreList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("movie");
  const [activeGenre, setActiveGenre] = useState({});
  const [page, setPage] = useState(1);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQwM2M3YTBkZmQyN2YwYTkyOTJmMDkyNDkyZTkwZiIsIm5iZiI6MTczNjcwMDc5MC4xMzIsInN1YiI6IjY3ODNmMzc2MDY5MGFjMDZlNzdiNWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8HnEC3yGmDoSxhyfi4ObtEE3iWap_lD5yBsFbAewxM",
    },
  };

  const getGenreList = async (type) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?language=en`,
        options
      );
      const data = await response.json();
      setGenreList(data.genres);
      setActiveGenre(data.genres[0]);
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGenreList("movie");
  }, []);
  if (loading) {
    return <div className=""> <Spinner /></div>;
  }
  return (
    <div className="bg-black h-svh">
      <Nav />
      <div className=" flex flex-col pt-40 text-white ">
        <div className="flex flex-col items-center gap-8 justify-center h-50 bg-neutral-900 w-[90%] m-auto">
          <div className="flex items-center gap-10 ">
            <button
              onClick={() => {
                setActiveType("movie");
                getGenreList("movie");
              }}
              className={`${
                activeType === "movie" ? "bg-red-500 " : ""
              } text-lg py-1 px-2 rounded-sm cursor-pointer transition-all duration-300`}
            >
              Movies
            </button>
            <button
              onClick={() => {
                setActiveType("tv");
                getGenreList("tv");
              }}
              className={`${
                activeType === "tv" ? "bg-red-500 " : ""
              } text-lg py-1 px-2 rounded-sm cursor-pointer transition-all duration-300`}
            >
              Tv Shows
            </button>
            <button></button>
          </div>
          <ul className="flex flex-wrap gap-3 p-4">
            {genreList.map((genre) => (
              <Link
                key={genre.id}
                className={`text-white w-fit bg-neutral-800 px-2 py-1 rounded-3xl cursor-pointer ${activeGenre.id === genre.id ? "bg-red-600" : ""} hover:bg-red-600  transition-all duration-300`}
                onClick={()=> setActiveGenre(genre)}
              >
                {genre.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
            <FetchSectionsData url={`https://api.themoviedb.org/3/discover/${activeType}?with_genres=${activeGenre.id}`} section={activeGenre.name} />
        </div>
      </div>
    </div>
  );
}

export default GenreHandel;
