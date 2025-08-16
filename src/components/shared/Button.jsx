import { forwardRef } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

// 1. Declara el componente
const Button = forwardRef(({ variant = "clasic", icon, ...props }, ref) => {
  const baseStyles =
    "min-w-12 min-h-12 flex justify-center items-center md:p-3 group hover:scale-110 text-nigth active:scale-90 transition-all duration-300";

  const variants = {
    player:
      "bg-timberWolf text-nigt rounded-full absolute bottom-2 right-4 md:opacity-0 md:group-hover/play:opacity-100",
    control:
      "rounded-full md:w-14 md:h-14 disabled:text-neutral-600 dark:disabled:text-neutral-500 hover:bg-nigth/10 dark:hover:bg-timberWolf/20 text-night dark:text-timberWolf",
    clasic:
      "bg-kepple dark:bg-indigo-800 rounded-lg text-timberWolf w-min h-min",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant])}
      ref={ref}
      {...props}
    >
      {icon}
    </button>
  );
});

Button.displayName = "Button";

Button.propTypes = {
  variant: PropTypes.oneOf(["player", "control", "clasic", ""]),
  icon: PropTypes.any,
};

// 2. Exporta el componente
export default Button;
