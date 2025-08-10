import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/Button";
import Duration from "./Duration";
import { usePlayerStore } from "../../stores/playerStore";

export default function Controls() {
  const { isPlaying, setIsPlaying, prevTrack, nextTrack } = usePlayerStore(
    (store) => store,
  );

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-wrap w-4/12 justify-center items-center gap-x-4 gap-y-2">
      {/* Button for shuffle */}
      <Button variant="control" disabled icon={faShuffle} />

      <Button variant="control" icon={faBackwardStep} onClick={prevTrack} />

      <Button
        variant="control"
        onClick={handlePlayPause}
        icon={isPlaying ? faPause : faPlay}
      />

      <Button variant="control" icon={faForwardStep} onClick={nextTrack} />

      <Button variant="control" disabled icon={faRepeat} />

      <Duration />
    </div>
  );
}
