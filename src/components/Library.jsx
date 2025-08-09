import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import ItemTrack from "./ItemTrack";
import { Swiper, SwiperSlide } from "swiper/react";
import TrackCard from "./library/TrackCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
// className='w-full h-full px-3 py-4 grid grid-cols-autoFit gap-4 mx-auto'

function Library() {
  const { tracks } = useContext(MyContext);

  return (
    <>
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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full py-24 md:py-12"
      >
        {tracks.map((track) => (
          <SwiperSlide key={track.id} className="bg-center bg-cover w-72">
            <TrackCard track={track} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Library;
