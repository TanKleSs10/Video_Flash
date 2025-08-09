import { Swiper, SwiperSlide } from "swiper/react";
import TrackCard from "./TrackCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { tracks } from "../../data/track";

function Library() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      className="w-full"
    >
      {tracks.map((track) => (
        <SwiperSlide key={track.id} className="bg-center bg-cover w-64">
          <TrackCard track={track} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Library;
