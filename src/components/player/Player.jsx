import { useEffect, useRef } from "react";
import Controls from "./Controls";
import Volume from "./Volume";
import { usePlayerStore } from "../../stores/playerStore";
import Duration from "./Duration";
import Button from "../shared/Button";
import { Repeat, Shuffle } from "lucide-react";

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
    <footer
      className={`
      flex flex-col sm:flex-row flex-wrap
      w-full rounded-lg
      p-4 sm:p-3
      
    `}
    >
      <audio className="hidden" ref={audioRef} onEnded={nexTrack} />

      <div className="flex w-full justify-between gap-x-4 gap-y-2 mb-3 sm:mb-0">
        <Controls />
        <Duration audio={audioRef} />
        <div className="flex">
          <Button
            variant="control"
            disabled
            icon={<Shuffle className="w-7 h-7 fill-current" fill="true" />}
          />
          <Button
            variant="control"
            disabled
            icon={<Repeat className="w-7 h-7 fill-current" fill="true" />}
          />
          <Volume />
        </div>
      </div>
    </footer>
  );
}
