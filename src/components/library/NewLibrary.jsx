import { usePlayerStore } from "../../stores/playerStore";
import { motion, AnimatePresence } from "motion/react";
import Track from "./Track";

export default function NewLibrary() {
  const { tracks, currentTrack, isPlaying } = usePlayerStore((state) => state);
  const currentTrackId = currentTrack?.id;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          layout
          className="
              absolute left-0 lg:w-4/12 z-40 w-full h-full p-4 bg-[#ECECEC] dark:bg-nigth lg:rounded-lg text-white overflow-y-auto
              lg:static md:p-4 md:bg-[#ECECEC] md:dark:bg-nigth
            "
        >
          <h2 className="text-xl text-nigth dark:text-timberWolf uppercase font-bold mb-4">
            Playlist
          </h2>
          <div className="space-y-2">
            {tracks.map((track) => (
              <Track
                key={track.id}
                track={track}
                isPlaying={currentTrackId === track.id && isPlaying}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
