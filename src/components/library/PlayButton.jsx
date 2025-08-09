import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/Button";

export default function PlayButton() {
  return (
    <Button
      onClick={() => {
        console.log("¡Botón de reproducción clickeado!");
      }}
      icon={faPlay}
      variant="player"
    />
  );
}
