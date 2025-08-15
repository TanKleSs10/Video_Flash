import Button from "../shared/Button";
import { usePlayerStore } from "../../stores/playerStore";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

export default function Controls() {
  const { isPlaying, setIsPlaying, prevTrack, nextTrack } = usePlayerStore(
    (store) => store,
  );

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex gap-5 order-2 md:order-none justify-center md:justify-stretch">
      {/* Button for shuffle */}

      <Button
        variant="control"
        icon={<SkipBack className="w-7 h-7 fill-current" fill="true" />}
        onClick={prevTrack}
      />

      <Button
        variant="control"
        onClick={handlePlayPause}
        icon={
          isPlaying ? (
            <Pause className="w-7 h-7 fill-current" fill="true" />
          ) : (
            <Play className="w-7 h-7 fill-current" fill="true" />
          )
        }
      />

      <Button
        variant="control"
        icon={<SkipForward className="w-7 h-7 fill-current" fill="true" />}
        onClick={nextTrack}
      />
    </div>
  );
}
