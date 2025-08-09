import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function Button({ variant = "clasic", icon, ...props }) {
  const baseStyles =
    "min-w-12 min-h-12  flex justify-center items-center p-3 group hover:scale-110 active:scale-90 transition-all duration-300";

  const variants = {
    player:
      "bg-timberWolf text-nigt rounded-full absolute bottom-2 right-4 md:opacity-0 md:group-hover/play:opacity-100",
    control:
      "rounded-full disabled:text-neutral-600 dark:disabled:text-neutral-500 hover:bg-nigth/10 dark:hover:bg-timberWolf/20 dark:text-timberWolf",
    clasic: "bg-kepple dark:bg-indigo-800 rounded-lg text-timberWolf",
  };

  return (
    <button className={clsx(baseStyles, variants[variant])} {...props}>
      <FontAwesomeIcon className="w-6 h-6" icon={icon} />
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["player", "control", "clasic", ""]),
  icon: PropTypes.object.isRequired,
};
