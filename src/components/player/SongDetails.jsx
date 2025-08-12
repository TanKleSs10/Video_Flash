import PropTypes from "prop-types";
import Tag from "../library/Tag";

export default function SongDetails({ details }) {
  return (
    <div className="flex md:w-4/12 items-center gap-4 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
      <figure className="min-w-max max-h-16 h-16 rounded-xl">
        <img
          className="hidden md:block w-full h-full object-cover rounded-lg"
          src={details.img}
          alt={`Imagen del track ${details.title} sondando`}
        />
      </figure>
      <div className="overflow-hidden">
        <p className="text-xl  md:text-lg dark:text-white text-black capitalize overflow-hidden text-ellipsis whitespace-nowrap">
          {details.title}
        </p>
        <div className="hidden md:block">
          <Tag tagName={details.tag} />
        </div>
      </div>
    </div>
  );
}

SongDetails.propTypes = {
  details: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }),
};
