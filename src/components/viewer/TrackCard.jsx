import Tag from "./Tag";
import Modal from "./Modal";
import PlayButton from "./PlayButton";
import TitleCard from "./TitleCard";
import PropTypes from "prop-types";

export default function TrackCard({ track }) {
  return (
    <article className="w-full min-h-max flex flex-col bg-timberWolf dark:bg-gray-900 shadow-content dark:shadow-contentInv rounded-lg pb-4">
      <figure className="w-full max-h-60 relative group/play mb-2">
        <img
          className="w-full h-full object-cover transition-opacity rounded-tl-lg rounded-tr-lg"
          src={track.img}
          alt=""
        />
        <PlayButton id={track.id} />
      </figure>

      <div className="px-2 flex flex-wrap justify-between gap-y-2">
        <p className="text-teal-700 dark:text-indigo-500 text-base md:text-lg">
          ${track.price} MXN
        </p>
        <p className="text-onix dark:text-platinum font-light md:text-lg">
          {track.bpm} BPM
        </p>

        <TitleCard name={track.name} id={track.id} />

        <Tag tagName={track.tag} />

        <Modal track={track} />
      </div>
    </article>
  );
}

TrackCard.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    bpm: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    lease: PropTypes.string.isRequired,
  }).isRequired,
};
