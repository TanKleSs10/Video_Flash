import PropTypes from "prop-types";

export default function TitleCard({ name }) {
  return (
    <p
      className={`w-full transition-all text-lg overflow-hidden text-ellipsis whitespace-nowrap md:text-xl mb-1 font-normal capitalize text-onix dark:text-platinum`}
    >
      {name}
    </p>
  );
}

TitleCard.propTypes = {
  name: PropTypes.string,
};
