import PropTypes from "prop-types";

export default function NewTrackCard({ img, title }) {
  return (
    <article className="flex flex-col w-[400px] max-h-80 gap-6 h-min overflow-hidden">
      {/* Imagen */}
      <picture className="flex w-full rounded-lg aspect-square overflow-hidden">
        <img className="w-full object-cover" src={img} alt={title} />
      </picture>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-timberWolf tracking-wide uppercase">
          {title}
        </h3>
      </div>
    </article>
  );
}

NewTrackCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};
