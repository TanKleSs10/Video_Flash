import { Howl } from "howler";
import { useEffect, useContext } from "react";
import { MyContext } from '../../context/MyContext';

export function ControlPlayer() {
  const {
    vol,
    looping,
    setProgress,
    setDuration,
    setIsPlaying,
    currentTrack,
    currentSoundRef,
    setIsTrackEnded,
  } = useContext(MyContext);

  // Controlar la reproducción de la pista actual
  useEffect(() => {
    // Crea una nueva instancia de Howl cuando cambia la pista actual
    if (currentTrack) {
      currentSoundRef.current = new Howl({
      // configuracion de la instancia Howl
        src: [`/src/audio/${currentTrack.track}`],
        html5: true,
        onplay: () => setIsPlaying(true),
        loop: looping,
        volume: vol,
        onpause: () => {
          setIsPlaying(false);
        },
        onload: () => {
          if (currentSoundRef.current) {
            setDuration(currentSoundRef.current.duration());
          }
        },
        onseek: () => setProgress(currentSoundRef.current.seek()),
        onend: () => {
          setIsPlaying(false); // Pausa la reproducción al finalizar el track
          setIsTrackEnded(true); // Establece el estado como "terminado" al finalizar el track
        },
      });

      const progressInterval = setInterval(() => {
      if (currentSoundRef.current) {
        setProgress(currentSoundRef.current.seek());
      }
      }, 100);
      currentSoundRef.current.play(); // Iniciar la reproducción de la nueva pista
      return () => {
        clearInterval(progressInterval);
        currentSoundRef.current.stop();
        currentSoundRef.current = null;
      };
    } else {
      // Si no hay pista actual, reinicia la referencia
      if (currentSoundRef.current) {
        currentSoundRef.current.stop();
        currentSoundRef.current = null;
      }
    }
  }, [currentTrack, currentSoundRef]);
}
