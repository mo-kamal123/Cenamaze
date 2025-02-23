import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function HomeSliders({ sectionName, url, path }) {
  const [trending, setTrending] = useState([]);
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
    const getmovies = async () => {
      try {
        const response = await fetch(`${url}`, options);
        const json = await response.json();
        console.log(json);
        setTrending(json.results);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getmovies();
  }, []);
  if (loading) {
    return (
      <div className="my-10 mx-auto w-[90%] h-50">
        <div className="w-fit group">
          <Link to={path} className="text-3xl ">
            {sectionName}
          </Link>
          <div className="w-4 h-2 mt-4 rounded-full bg-red-500 group-hover:w-full transition-all duration-300"></div>
        </div>
        <div className="h-full flex justify-center items-center">Loading ...</div>
      </div>
    );
  }
  return (
    <div className="my-10 mx-auto w-[90%]">
      <div className="w-fit group">
        <Link to={path} className="text-3xl ">
          {sectionName}
        </Link>
        <div className="w-4 h-2 mt-2 rounded-full bg-red-500 group-hover:w-full transition-all duration-300"></div>
      </div>
      <div>
  <Swiper
    // slidesPerView={6}
    // spaceBetween={30}
    pagination={{
      clickable: true,
    }} // Removed the extra comma here
    breakpoints={{
      340: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {trending.map((movie) => (
      <SwiperSlide key={movie.id}>
        <MovieCard movie={movie} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    </div>
  );
}

export default HomeSliders;
