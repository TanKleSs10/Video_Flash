import { useEffect, useRef } from "react";
import Controls from "./Controls";
import SongDetails from "./SongDetails";
import Volume from "./Volume";
import { usePlayerStore } from "../../stores/playerStore";

export default function NewPlayer() {
  const audioRef = useRef();
  const { currentTrack, isPlaying, nexTrack, volume } = usePlayerStore(
    (store) => store,
  );

  useEffect(() => {
    if (!currentTrack || !audioRef.current.src.endsWith(currentTrack.track))
      return;
    isPlaying ? play() : audioRef.current.pause();
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (currentTrack) {
      audioRef.current.src = `/audio/${currentTrack.track}`;
      play();
    }
  }, [currentTrack]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const play = () => {
    audioRef.current.play().catch((e) => console.log("Error Playing: ", e));
  };

  return (
    <footer className={`w-full h-full max-h-[140px] bg-transparent`}>
      <section
        className={`flex w-full
        gap-y-2
        md:w-10/12 bg-timberWolf 
        dark:bg-gray-900 rounded-lg 
        p-3 shadow-content 
        dark:shadow-contentInv flex-wrap
        transition-all duration-300
        absolute left-1/2 -translate-x-1/2 ${currentTrack ? "bottom-2" : "-bottom-full"}`}
      >
        <audio ref={audioRef} onEnded={nexTrack} />
        {currentTrack && (
          <SongDetails
            details={{
              title: currentTrack.name,
              img: currentTrack.img,
              tag: currentTrack.tag,
            }}
          />
        )}
        <Controls />
        <Volume />
      </section>
    </footer>
  );
}
