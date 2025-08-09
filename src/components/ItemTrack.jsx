import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Tag from "./Tag";
import Modal from "./Modal";

function ItemTrack({ track }) {
  const { playTrack, currentTrack, isPlaying } = useContext(MyContext);

  return (
    <div className="w-full min-h-max  flex flex-col bg-timberWolf dark:bg-gray-900 shadow-content dark:shadow-contentInv rounded-lg pb-4">
      <div className="flex flex-col">
        <figure className="w-full max-h-60 relative group/play mb-2">
          <img
            className="w-full h-full object-cover transition-opacity rounded-tl-lg rounded-tr-lg"
            src={track.img}
            alt=""
          />
          <button
            onClick={() => {
              playTrack(track);
            }}
            className="
                    cursor-pointer 
                    bg-timberWolf 
                    w-12
                    h-12
                    flex
                    justify-center
                    items-center
                    rounded-full 
                    absolute 
                    bottom-2 
                    right-4 
                    text-2xl md:opacity-0 md:group-hover/play:opacity-100 transition-opacity"
          >
            <FontAwesomeIcon
              icon={
                isPlaying && currentTrack && currentTrack.id === track.id
                  ? faPause
                  : faPlay
              }
            />
          </button>
        </figure>
      </div>
      <div className="px-4 overflow-hidden">
        <div className="w-full flex gap-4 justify-between">
          <p className="text-teal-700 dark:text-indigo-500 text-base md:text-lg">
            ${track.price} MXN
          </p>
          <p className="text-onix dark:text-platinum font-light md:text-lg">
            {track.bpm} BPM
          </p>
        </div>
        <p
          className={`transition-all text-lg overflow-hidden text-ellipsis whitespace-nowrap md:text-xl mb-1 font-normal capitalize ${isPlaying && currentTrack && currentTrack.id === track.id ? "text-kepple dark:text-indigo-500 font-semibold" : "text-onix dark:text-platinum"}`}
        >
          {" "}
          {track.name}{" "}
        </p>
        <div className="flex justify-between">
          <Tag>{track.tag}</Tag>
          <Modal track={track} />
        </div>
      </div>
    </div>
  );
}

export default ItemTrack;

