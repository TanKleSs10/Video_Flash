import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import NewProgressBar from "../shared/NewProgressBar";

export default function Duration({ audio }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioEl = audio.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioEl.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioEl.duration || 0);
    };

    audioEl.addEventListener("timeupdate", handleTimeUpdate);
    audioEl.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioEl.removeEventListener("timeupdate", handleTimeUpdate);
      audioEl.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [audio]); // solo depende de audio

  const formatTime = (time) => {
    if (time == null) return "0:00";
    const secs = Math.floor(time % 60);
    const min = Math.floor(time / 60);
    return `${min}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex max-w-2xl w-full items-center justify-center gap-2 dark:text-timberWolf text-nigth">
      <span className="block w-10 text-center">{formatTime(currentTime)}</span>
      <NewProgressBar
        value={(currentTime / duration) * 100 || 0}
        onChange={(percentage) => {
          audio.current.currentTime = (percentage / 100) * duration;
        }}
        max={100}
      />
      <span className="w-10 text-center">
        {duration ? formatTime(duration) : "0:00"}
      </span>
    </div>
  );
}

Duration.propTypes = {
  audio: PropTypes.object,
};
