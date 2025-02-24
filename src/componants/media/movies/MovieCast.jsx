import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MovieCast({cast}) {
  return (
    <div className="w-[90%] m-auto">
    <h2 className="text-4xl font-bold mb-4 text-white">Cast</h2>
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
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
      {cast.map((actor) => (
        <SwiperSlide key={actor.cast_id}>
          <div className="flex flex-col gap-2">
            <img
            className="rounded"
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={`${actor.name}img`}
            />
            <p className="text-lg">{actor.name}</p>
            <p className="text-sm text-gray-400">({actor.character})</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>  )
}

export default MovieCast