import { useEffect, useState } from "react";
import Nav from "../Nav";
import PersonData from "./persons/PersonData";
import MovieData from "./movies/MovieData";
import TvData from "./tv/TvData";
import SmallNav from "../SmallNav";
import Spinner from "../Spinner";

function FetchMediaData({ url, type }) {
  const [media, setMedia] = useState({});
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQwM2M3YTBkZmQyN2YwYTkyOTJmMDkyNDkyZTkwZiIsIm5iZiI6MTczNjcwMDc5MC4xMzIsInN1YiI6IjY3ODNmMzc2MDY5MGFjMDZlNzdiNWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8HnEC3yGmDoSxhyfi4ObtEE3iWap_lD5yBsFbAewxM",
    },
  };
  useEffect(() => {
    const fetchMedia = async (url) => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMedia(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia(url);
  }, []);
  if (type === "movie" && !loading) {
    return (
      <>
        <div></div>
        <div className="lg:hidden">
          <SmallNav />
        </div>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <MovieData media={media} />
      </>
    );
  }
  if (type === "tv" && !loading) {
    return (
      <>
        <div className="lg:hidden">
          <SmallNav />
        </div>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <TvData media={media} />
      </>
    );
  }
  if (type === "person" && !loading) {
    return (
      <>
        <div className="lg:hidden">
          <SmallNav />
        </div>
        <div className="hidden lg:block">
          <Nav />
        </div>{" "}
        <PersonData media={media} />
      </>
    );
  }
  return <div><Spinner /></div>;
}

export default FetchMediaData;
