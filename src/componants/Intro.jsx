import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCreative, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import IntroSlide from "./IntroSlide";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Intro() {
  const [introbg, setIntrobg] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQwM2M3YTBkZmQyN2YwYTkyOTJmMDkyNDkyZTkwZiIsIm5iZiI6MTczNjcwMDc5MC4xMzIsInN1YiI6IjY3ODNmMzc2MDY5MGFjMDZlNzdiNWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8HnEC3yGmDoSxhyfi4ObtEE3iWap_lD5yBsFbAewxM",
    },
  };
  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        const json = await response.json();
        console.log(json.results);
        setIntrobg(json.results);
      } catch (err) {
        console.log(err);
      }
    };
    getNowPlaying();
  }, []);
  return (
    <div className="w-full h-svh">
      <Swiper
        modules={[Autoplay, EffectCreative, Navigation, Pagination, Scrollbar, A11y]}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,}}
        grabCursor={true}
        loop={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="mySwiper3 w-full h-svh"
      >
        {introbg.slice(0,5).map((movie) => (
          <SwiperSlide key={movie.id}>
            <IntroSlide movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Intro;
