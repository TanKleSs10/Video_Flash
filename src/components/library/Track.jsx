import { Pause, Play } from "lucide-react";
import PropTypes from "prop-types";
import { usePlayerStore } from "../../stores/playerStore";
import Button from "../shared/Button";

export default function Track({ track, isPlaying }) {
  const { setCurrentTrack, setIsPlaying, currentTrack } = usePlayerStore(
    (state) => state,
  );

  const handlePlay = (id) => {
    if (currentTrack.id == id) {
      setIsPlaying(!isPlaying);
      return;
    }
    setCurrentTrack(id);
  };

  return (
    <div className="flex items-center p-2 hover:bg-timberWolf dark:hover:bg-black rounded-md transition-colors duration-200 cursor-pointer">
      <Button
        variant="control"
        icon={
          isPlaying ? (
            <Pause className="fill-current" fill="true" />
          ) : (
            <Play className="fill-current" fill="true" />
          )
        }
        onClick={() => handlePlay(track.id)}
      />
      <div className="flex-1">
        <p className="font-semibold text-nigth dark:text-timberWolf capitalize truncate">
          {track.name}
        </p>
        <p className="text-sm text-neutral-700 dark:text-slate-50">
          {track.tag}
        </p>
      </div>
      <p className="text-gray-400 text-sm hidden sm:block">{track.lease}</p>
    </div>
  );
}

Track.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    lease: PropTypes.string,
  }),
  isPlaying: PropTypes.bool,
};
