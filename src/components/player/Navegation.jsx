import Button from "../shared/Button";
import { usePlayerStore } from "../../stores/playerStore";
import {
  List,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Timer,
} from "lucide-react";
import VolumeControl from "./VolumeControle";

export default function Controls() {
  const {
    isPlaying,
    setIsPlaying,
    prevTrack,
    nextTrack,
    isOpen,
    setIsOpen,
    isShuffled,
    toggleShuffle,
    isRepeating,
    toggleRepeat,
  } = usePlayerStore((store) => store);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const togglePlaylist = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex md:gap-5 w-full md:w-min justify-between">
      <Button
        variant="control"
        onClick={togglePlaylist}
        icon={isOpen ? <Timer /> : <List />}
      />
      <Button
        variant="control"
        icon={
          <Shuffle
            className={`
        w-5 h-5 md:w-7 md:h-7
        ${isShuffled ? "text-cyan-800 dark:text-indigo-800" : "fill-current"}
      `}
          />
        }
        onClick={toggleShuffle}
      />

      <Button
        variant="control"
        icon={
          <SkipBack
            className="w-5 h-5 md:w-7 md:h-7 fill-current"
            fill="true"
          />
        }
        onClick={prevTrack}
      />
      <Button
        variant="control"
        onClick={handlePlayPause}
        icon={
          isPlaying ? (
            <Pause className="w-5 h-5 md:w-7 md:h-7 fill-current" fill="true" />
          ) : (
            <Play className="w-5 h-5 md:w-7 md:h-7 fill-current" fill="true" />
          )
        }
      />
      <Button
        variant="control"
        icon={
          <SkipForward
            className="w-5 h-5 md:w-7 md:h-7 fill-current"
            fill="true"
          />
        }
        onClick={nextTrack}
      />
      <Button
        variant="control"
        icon={
          <Repeat
            className={`
        w-5 h-5 md:w-7 md:h-7
        ${isRepeating ? "text-cyan-800 dark:text-indigo-800" : "fill-current"}
      `}
            fill="true"
          />
        }
        onClick={toggleRepeat}
      />
      <VolumeControl />
    </div>
  );
}
