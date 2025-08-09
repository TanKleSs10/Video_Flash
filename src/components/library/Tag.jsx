import PropTypes from "prop-types";

export default function Tag({ tagName }) {
  return (
    <div className="inline-flex max-w-xs max-h-10 items-center border-2 border-cyan-700 dark:border-purple-500 shadow-in shadow-cyan-700 dark:shadow-purple-800 px-2 py-1 rounded-lg">
      <span className="font-normal text-sm text-cyan-700 dark:text-purple-500 capitalize">
        {tagName}
      </span>
    </div>
  );
}

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};
