import { useEffect, useRef } from "react";
import Navegation from "./Navegation";
import { usePlayerStore } from "../../stores/playerStore";
import Duration from "./Duration";

export default function NewPlayer() {
  const audioRef = useRef();
  const { currentTrack, isPlaying, nextTrack, volume } = usePlayerStore(
    (store) => store,
  );

  useEffect(() => {
    // Si no hay un track actual, no hagas nada
    if (!currentTrack) return;

    // Cambia la fuente del audio si el track cambia
    if (audioRef.current.src !== `/audio/${currentTrack.track}`) {
      audioRef.current.src = `/audio/${currentTrack.track}`;
    }

    // Controla la reproducción con base en el estado 'isPlaying'
    if (isPlaying) {
      // Intenta reproducir el audio. Esto solo funcionará
      // si el usuario ya ha interactuado con la página.
      audioRef.current.play().catch((e) => {
        console.error("Error al intentar reproducir:", e);
        // Puedes agregar lógica para mostrar un mensaje al usuario aquí
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    // Ajusta el volumen cuando el estado 'volume' cambie
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <footer
      className="
      flex flex-col
      w-full
      p-4 sm:p-3
      justify-between items-center
      gap-x-4 gap-y-2
      rounded-lg
    "
    >
      <audio className="hidden" ref={audioRef} onEnded={() => nextTrack()} />
      <Duration audio={audioRef} />
      <Navegation />
    </footer>
  );
}
