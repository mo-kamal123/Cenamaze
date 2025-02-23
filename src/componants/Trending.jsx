import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { Autoplay, EffectCreative, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HomeSliders from "./HomeSliders";

function Trending() {
    return (
        <div>
            <HomeSliders path={'/trending'} sectionName={"Trending"} url={"https://api.themoviedb.org/3/trending/all/day?language=en-US"} />
        </div>
    );
}

export default Trending;
