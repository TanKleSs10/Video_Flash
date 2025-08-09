import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faPlay,
  faForwardStep,
  faPause,
  faShuffle,
  faRepeat,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ButtonPlayer from "./ButtonPlayer";
import { MyContext } from "../../context/MyContext";
import InputRange from "../InputRange";
import Tag from "../Tag";
import "../styles.css";

function Player() {
  const {
    currentTrack,
    isPlaying,
    playTrack,
    duration,
    handleTimeChange,
    progress,
    nextTrack,
    handlerAutoPlay,
    autoplay,
    looping,
    handlerLoop,
    handleVolChange,
    handleMute,
    vol,
    mute,
    backTrack,
  } = useContext(MyContext);

  return (
    <section
      className={`w-full flex flex-col items-center md:pb-4 bg-transparent fixed left-0 ${currentTrack ? "bottom-0" : "-bottom-36"} transition-all duration-500`}
    >
      <div className="flex w-full md:w-4/6 bg-timberWolf dark:bg-gray-900 rounded-lg px-4 py-3 shadow-content dark:shadow-contentInv flex-wrap">
        <InputRange
          NameClass="w-full mb-2 range"
          ma={duration}
          val={progress}
          event={handleTimeChange}
        />
        <div className="flex w-1/2 md:w-2/6 items-center px-2 py-1 gap-4 flex-grow-1">
          <figure className="min-w-max max-h-10 h-10 rounded-xl">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={currentTrack ? currentTrack.img : ""}
              alt=""
            />
          </figure>
          <div className="overflow-hidden">
            <p className="text-lg dark:text-white text-black capitalize overflow-hidden text-ellipsis whitespace-nowrap">
              {currentTrack ? currentTrack.name : ""}
            </p>
            <Tag nameTag={currentTrack ? currentTrack.tag : ""}>
              #{currentTrack ? currentTrack.tag : ""}
            </Tag>
          </div>
        </div>
        <div className="w-1/2 md:w-2/6 flex justify-center items-center gap-4 flex-grow-1">
          <button
            onClick={handlerAutoPlay}
            className={`hidden sm:inline text-xl w-10 h-10 rounded-lg outline-kepple dark:outline-indigo-800 ${autoplay ? "text-black dark:text-timberWolf" : "text-slate-500"}`}
          >
            <FontAwesomeIcon icon={faShuffle} />
          </button>
          <ButtonPlayer aLabel={"Reproducir track anterior"} event={backTrack}>
            <FontAwesomeIcon icon={faBackwardStep} />
          </ButtonPlayer>
          <ButtonPlayer
            aLabel={"Reproducir/pausar track"}
            event={() => {
              playTrack(currentTrack);
            }}
          >
            <FontAwesomeIcon
              icon={isPlaying && currentTrack ? faPause : faPlay}
            />
          </ButtonPlayer>
          <ButtonPlayer
            aLabel={"Reproducir siguiente track"}
            event={nextTrack}
            className="text-2xl md:text-3xl"
          >
            <FontAwesomeIcon icon={faForwardStep} />
          </ButtonPlayer>
          <button
            onClick={handlerLoop}
            className={`hidden sm:inline text-xl w-10 h-10 rounded-lg outline-kepple dark:outline-indigo-800 ${looping ? "text-black dark:text-timberWolf" : "text-slate-500"}`}
          >
            <FontAwesomeIcon icon={faRepeat} />
          </button>
        </div>
        <div className="hidden md:flex justify-end items-center gap-2 md:w-2/6 flex-grow-1">
          <ButtonPlayer event={handleMute}>
            <FontAwesomeIcon icon={faVolumeLow} />
          </ButtonPlayer>
          <InputRange
            NameClass="w-3/5 range"
            ma={1}
            val={mute ? 0 : vol}
            event={handleVolChange}
          />
        </div>
      </div>
    </section>
  );
}

export default Player;
