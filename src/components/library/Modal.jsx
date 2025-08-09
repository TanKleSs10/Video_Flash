import { useState } from "react";
import Button from "../shared/Button";
import PropTypes from "prop-types";
import { faCircleInfo, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ track }) {
  const [modal, SetModal] = useState(false);

  const handleModal = () => {
    SetModal(!modal);
  };

  return (
    <>
      <Button icon={faCircleInfo} onClick={handleModal} />
      <div
        className={`absolute w-full flex h-full ${modal ? "opacity-100" : "opacity-0 pointer-events-none "} flex-col px-4 py-2 md:py-3 items-center flex-wrap rounded-lg top-0 left-0 bg-timberWolf dark:bg-gray-900 transition-opacity duration-500`}
      >
        <h3 className="text-black dark:text-white bg-re text-xl mb-3">
          Información del track
        </h3>
        <div className="flex flex-col w-full gap-1 text-timberWolf">
          <h2>{track.name}</h2>
          <p>ID: {track.id}</p>
          <p>BPM: {track.bpm}</p>
          <p>Precio: ${track.price}</p>
          <p>Duración: {track.duration}</p>
          <p>Etiqueta: {track.tag}</p>
          <p>Licencia: {track.lease}</p>
        </div>
        <Button icon={faClose} onClick={handleModal} />
      </div>
    </>
  );
}

Modal.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    bpm: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    lease: PropTypes.string.isRequired,
  }).isRequired,
};
