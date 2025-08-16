import { AnimatePresence, motion } from "motion/react";
import { usePlayerStore } from "../../stores/playerStore";
import { useMediaQuery } from "react-responsive";
import NewTrackCard from "../library/NewTrackCard";

export default function Viewer() {
  const { viewPrevTrack, currentTrack, viewNextTrack } = usePlayerStore(
    (state) => state,
  );
  // Detecta si la pantalla es de tamaño "md" o más grande
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  if (!currentTrack) return null;

  const tracks = [
    { ...viewPrevTrack, variant: "prev" },
    { ...currentTrack, variant: "current" },
    { ...viewNextTrack, variant: "next" },
  ];

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.section
        key={currentTrack.id}
        className="flex mx-4 md:mx-0 flex-1 justify-center items-center gap-5 perspective-[1000px] rounded-lg h-full bg-[#ECECEC] dark:bg-nigth"
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDesktop ? (
          // Muestra los 3 tracks en escritorios para la animación de carrusel
          tracks.map((track) => (
            <NewTrackCard
              key={track.id}
              id={track.id}
              title={track.name}
              img={track.img}
              variant={track.variant}
            />
          ))
        ) : (
          // Muestra solo el track actual en móviles
          <NewTrackCard
            id={tracks[1].id}
            title={tracks[1].name}
            img={tracks[1].img}
            variant={tracks[1].variant}
          />
        )}
      </motion.section>
    </AnimatePresence>
  );
}
