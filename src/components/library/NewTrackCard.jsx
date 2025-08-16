import { motion } from "motion/react";
import PropTypes from "prop-types";

export default function NewTrackCard({ id, img, title, variant }) {
  // Define las clases de tamaño de Tailwind CSS según el 'variant'
  const sizeClasses =
    variant === "current" ? "w-[300px] md:w-[240px]" : "w-[200px] md:w-[200px]";

  return (
    <motion.article
      className={`
        flex flex-col gap-6 h-min overflow-hidden will-change-transform
        ${sizeClasses}
      `}
      layoutId={`CardViewer-${id}`}
      layout
      initial={false}
      animate={{
        opacity: variant === "current" ? 1 : 0.6,
        rotateY: variant === "prev" ? 25 : variant === "next" ? -25 : 0,
        z: variant === "current" ? 0 : -50,
      }}
      transition={{
        layout: { type: "spring", stiffness: 200, damping: 25 },
        ease: [0.25, 0.8, 0.5, 1],
      }}
      exit={{
        opacity: 0,
        z: -100,
        rotateY: variant === "prev" ? 25 : -25,
      }}
    >
      <picture className="flex w-full rounded-lg aspect-square overflow-hidden transition-all">
        <img className="w-full object-cover" src={img} alt={title} />
      </picture>
      <div className="text-center">
        <h3 className="text-lg sm:text-xl text-nigth dark:text-timberWolf font-semibold tracking-wide uppercase">
          {title}
        </h3>
      </div>
    </motion.article>
  );
}

NewTrackCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["prev", "current", "next"]),
};
