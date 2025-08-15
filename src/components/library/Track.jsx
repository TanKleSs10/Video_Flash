import { Pause, Play } from "lucide-react";
import PropTypes from "prop-types";
import { usePlayerStore } from "../../stores/playerStore";

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
    <div className="flex items-center p-2 hover:bg-gray-700 rounded-md transition-colors duration-200 cursor-pointer">
      <button
        className="text-white mr-4 p-2 bg-gray-600 rounded-full hover:bg-gray-500"
        onClick={() => handlePlay(track.id)}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <div className="flex-1">
        <p className="font-semibold text-white capitalize">{track.name}</p>
        <p className="text-sm text-gray-400">{track.tag}</p>
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
