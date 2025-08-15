import { motion } from "motion/react";
import PropTypes from "prop-types";

export default function NewTrackCard({ id, img, title, variant }) {
  return (
    <motion.article
      className="flex flex-col w-[300px] md:w-[400px] max-h-80 gap-6 h-min overflow-hidden will-change-transform"
      layoutId={`CardViewer-${id}`}
      layout
      initial={false}
      animate={{
        scale: variant === "current" ? 1 : 0.7,
        opacity: variant === "current" ? 1 : 0.6,
        rotateY: variant === "prev" ? 25 : variant === "next" ? -25 : 0,
        z: variant === "current" ? 0 : -50,
        translateZ: 0,
      }}
      transition={{
        layout: { type: "spring", stiffness: 200, damping: 25 },
        scale: { type: "spring", stiffness: 200, damping: 25 },
        ease: [0.25, 0.8, 0.5, 1], // Efecto brusco pero suave
      }}
      exit={{
        opacity: 0,
        z: -100,
        scale: 0.7,
        rotateY: variant === "prev" ? 25 : -25,
        transition: { duration: 0.4 },
        translateZ: 0,
      }}
    >
      <picture className="flex w-full rounded-lg aspect-square overflow-hidden transition-all ">
        <img className="w-full object-cover" src={img} alt={title} />
      </picture>
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-timberWolf tracking-wide uppercase">
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
