import { Swiper, SwiperSlide } from "swiper/react";
import TrackCard from "./TrackCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { usePlayerStore } from "../../stores/playerStore";

export default function Library() {
  const { tracks, currentTrack } = usePlayerStore((store) => store);
  const currentTrackId = currentTrack?.id ?? null;

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
        <SwiperSlide key={track.id} className={`bg-center bg-cover w-64 `}>
          <TrackCard track={track} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
