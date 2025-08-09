import clsx from "clsx";
import PropTypes from "prop-types";
import "../../styles/inputRange.css";

export default function InputRange({ size = "lg", ...props }) {
  const sizes = {
    lg: "w-full",
    md: "w-1/2",
    sm: "w-1/4",
  };
  return (
    <>
      <input
        className={clsx(
          `appearance-none h-1 outline-none bg-kepple dark:bg-indigo-800`,
          sizes[size],
        )}
        type="range"
        {...props}
      />
    </>
  );
}

InputRange.propTypes = {
  size: PropTypes.oneOf(["lg", "md", "sm", ""]),
};
