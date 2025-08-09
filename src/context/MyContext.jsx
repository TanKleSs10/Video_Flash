import React, { createContext, useState, useEffect, useRef } from "react";
import trackData from "../data/trackData";
import { ControlPlayer } from "../components/player/ControlPlayer";

export const MyContext = createContext();

export function MyContextProvider(props) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTrackEnded, setIsTrackEnded] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [looping, setLooping] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mute, setMute] = useState(false);
  const [vol, setVol] = useState(1);
  const currentSoundRef = useRef(null);
  const tracks = trackData();

  // funciones para el manejo del audio
  useEffect(() => {
    if (autoplay && isTrackEnded && looping === false) {
      nextTrack();
    }
  }, [autoplay, isTrackEnded, looping, vol, mute]);

  const handleVolChange = (event) => {
    const newVol = parseFloat(event.target.value);
    setVol(newVol);
    currentSoundRef.current.volume(newVol);
    if (newVol === 0) {
      setMute(true);
      currentSoundRef.current.mute(true);
    } else {
      setMute(false);
      currentSoundRef.current.mute(false);
    }
  };

  const handleMute = () => {
    setMute(!mute);
    currentSoundRef.current.mute(!mute);
    if (!mute && vol === 0) {
      setVol(50); // O cualquier otro valor predeterminado
      currentSoundRef.current.volume(50);
    }
  };
  // funciones centrales del reproducti (back play/pause next)
  const nextTrack = () => {
    // Encuentra el índice de la pista actual en la lista de pistas;
    const indexTrack = tracks.findIndex(
      (track) => track.id === currentTrack.id,
    );

    // Obtiene el índice de la siguiente pista
    const nextIndex = (indexTrack + 1) % tracks.length;
    setIsTrackEnded(false);
    // Reproduce la siguiente pista
    playTrack(tracks[nextIndex]);
  };

  // Función para reproducir/pausar una pista
  const playTrack = (track) => {
    if (
      currentSoundRef.current &&
      currentTrack &&
      currentTrack.id === track.id
    ) {
      // Si la pista actual es la misma que la que se quiere reproducir, se pausa o reanuda la reproducción.
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
      currentSoundRef.current.playing()
        ? currentSoundRef.current.pause()
        : currentSoundRef.current.play();
    } else {
      // Si es una pista diferente, se detiene la pista actual (si existe) y se carga y reproduce la nueva pista.
      if (currentSoundRef.current) {
        currentSoundRef.current.stop();
      }

      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  // Manejar el evento de clic en el botón Back (Anterior)
  const backTrack = () => {
    // Encuentra el índice de la pista actual en la lista de pistas
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id,
    );

    // Obtiene el índice de la pista anterior
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;

    // Reproduce la pista anterior
    playTrack(tracks[prevIndex]);
  };

  // Función para detener la reproducción de la pista actual
  const stopTrack = () => {
    setIsPlaying(false);
    if (currentSoundRef.current) {
      currentSoundRef.current.stop();
    }
  };

  // Función para adelantar o retroceder la pista
  const handleTimeChange = (event) => {
    const newTime = parseFloat(event.target.value);
    currentSoundRef.current.seek(newTime); // Asegúrate de que el método seek se esté llamando correctamente
    setProgress(newTime);
  };

  // Función para controlar si pasa a la siguente pista
  const handlerAutoPlay = () => setAutoplay(!autoplay);

  // Función para controlar si se reproduce en bucle
  const handlerLoop = () => {
    setLooping(!looping);
    currentSoundRef.current.once("play", () => {
      setIsTrackEnded(false);
    });
    if (currentSoundRef.current) {
      currentSoundRef.current.loop(!looping);
    }
  };

  // modo oscuro
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  localStorage.setItem("theme", theme);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  const changeMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Pasa las funciones junto con los estados en el valor del contexto
  const contextValue = {
    // pistas
    tracks,
    // valores de estado
    autoplay,
    isPlaying,
    currentTrack,
    currentSoundRef,
    autoplay,
    looping,
    duration,
    progress,
    vol,
    mute,
    theme,
    // funciones
    nextTrack,
    playTrack,
    backTrack,
    stopTrack,
    handlerLoop,
    handlerAutoPlay,
    handleTimeChange,
    handleVolChange,
    handleMute,
    changeMode,
    // actualizar valores
    setDuration,
    setIsPlaying,
    setProgress,
    setIsTrackEnded,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <ControlPlayer />
      {props.children}
    </MyContext.Provider>
  );
}
