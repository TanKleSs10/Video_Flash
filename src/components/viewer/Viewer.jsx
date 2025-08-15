import { AnimatePresence, motion } from "motion/react";
import { usePlayerStore } from "../../stores/playerStore";
import NewTrackCard from "../library/NewTrackCard";

export default function Viewer() {
  const { viewPrevTrack, currentTrack, viewNextTrack } = usePlayerStore(
    (state) => state,
  );

  if (!currentTrack) return null;

  const tracks = [
    { ...viewPrevTrack, variant: "prev" },
    { ...currentTrack, variant: "current" },
    { ...viewNextTrack, variant: "next" },
  ];

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.section
        key={currentTrack.id} // fuerza cambio para AnimatePresence
        className="flex w-8/12 items-center gap-5 perspective-[1000px]"
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {tracks.map((track) => (
          <NewTrackCard
            key={track.id}
            id={track.id}
            title={track.name}
            img={track.img}
            variant={track.variant}
          />
        ))}
      </motion.section>
    </AnimatePresence>
  );
}
