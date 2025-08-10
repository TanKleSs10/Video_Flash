import PropTypes from "prop-types";
import { usePlayerStore } from "../../stores/playerStore";

export default function TitleCard({ name, id }) {
  const { currentTrack, isPlaying } = usePlayerStore((store) => store);

  const currentTrackId = currentTrack?.id ?? null;

  return (
    <p
      className={`
        w-full transition-all 
        text-lg overflow-hidden 
        text-ellipsis whitespace-nowrap 
        md:text-xl mb-1 font-normal 
        capitalize
        ${id === currentTrackId ? (isPlaying ? "text-kepple dark:text-indigo-500" : "text-onix dark:text-platinum") : "text-onix dark:text-platinum"}
      `}
    >
      {name}
    </p>
  );
}

TitleCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
