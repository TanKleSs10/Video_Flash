import Button from "../shared/Button";
import PropTypes from "prop-types";
import { usePlayerStore } from "../../stores/playerStore";
import { Pause, Play } from "lucide";

export default function PlayButton({ id }) {
  const { setCurrentTrack, currentTrack, setIsPlaying, isPlaying } =
    usePlayerStore((store) => store);

  const currentTrackId = currentTrack?.id ?? null;

  const handlePlay = (id) => {
    if (id !== currentTrackId) {
      setCurrentTrack(id);
      setIsPlaying(true); // forzar reproducción
    } else {
      setIsPlaying(!isPlaying); // toggle si es el mismo track
    }
  };

  return (
    <Button
      onClick={() => handlePlay(id)}
      icon={id === currentTrackId ? isPlaying ? <Pause /> : <Play /> : <Play />}
      variant="player"
    />
  );
}

PlayButton.propTypes = {
  id: PropTypes.string.isRequired,
};
