import * as Slider from "@radix-ui/react-slider";
import { motion } from "motion/react";
import PropTypes from "prop-types";

export default function NewProgressBar({ value, max, onChange }) {
  return (
    <Slider.Root
      className="relative flex flex-1 items-center select-none h-5 group"
      value={[value]}
      onValueChange={(val) => onChange(val[0])}
      max={max}
      step={1}
    >
      {/* Track */}
      <Slider.Track className="bg-gray-800 dark:bg-gray-700 relative grow rounded-full h-2">
        {/* Range con animación */}
        <Slider.Range asChild>
          <motion.div
            layout
            className="absolute bg-cyan-800 dark:bg-indigo-900 rounded-full h-full"
            transition={{ type: "spring", stiffness: 1000, damping: 100 }}
          />
        </Slider.Range>
      </Slider.Track>

      {/* Thumb */}
      <Slider.Thumb
        asChild
        className="block w-3 h-3 bg-white dark:bg-gray-200 rounded-full shadow-lg group-hover:scale-110 focus:outline-none"
      >
        <motion.div layout />
      </Slider.Thumb>
    </Slider.Root>
  );
}

NewProgressBar.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};
