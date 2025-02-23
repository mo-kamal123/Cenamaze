import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Intro from "./Intro";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
import TvShows from "./TvShows";
import Actors from "./Actors";
import Footer from "./Footer";
import SmallNav from "./SmallNav";

function Home() {
  const [movies, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQwM2M3YTBkZmQyN2YwYTkyOTJmMDkyNDkyZTkwZiIsIm5iZiI6MTczNjcwMDc5MC4xMzIsInN1YiI6IjY3ODNmMzc2MDY5MGFjMDZlNzdiNWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8HnEC3yGmDoSxhyfi4ObtEE3iWap_lD5yBsFbAewxM",
    },
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
          options
        );
        const data = await response.json();
        setData(data.results); // Update state
        // console.log(data); // Log the fetched data directly
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getdata(); // Call the async function
  }, []); // Empty dependency array means this runs only once on mount
  console.log(movies); // Log the fetched data directly

  return (
    <div
      className="bg-black text-white "
    >
        {/* <Nav /> */}
        <SmallNav />
      <Intro />
      <Trending />
      <Upcoming />
      <TvShows />
      <Actors />
      <Footer />
    </div>
  );
}

export default Home;
