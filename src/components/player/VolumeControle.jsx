import { Popover } from "@radix-ui/themes";
import { Volume1, Volume2, VolumeX } from "lucide-react"; // O cualquier ícono de volumen que uses
import NewProgressBar from "../shared/NewProgressBar.jsx"; // Asegúrate de que la ruta sea correcta
import { usePlayerStore } from "../../stores/playerStore.js";
import Button from "../shared/Button"; // Tu componente de botón

export default function VolumeControl() {
  const { volume, setVolume } = usePlayerStore((store) => store);

  // Determina qué ícono de volumen mostrar según el estado
  const getVolumeIcon = () => {
    if (volume === 0) {
      return (
        <VolumeX className="w-5 h-5 md:w-7 md:h-7 fill-current" fill="true" />
      );
    } else if (volume > 0.5) {
      return (
        <Volume2 className="w-5 h-5 md:w-7 md:h-7 fill-current" fill="true" />
      );
    } else {
      return (
        <Volume1 className="w-5 h-5 md:w-7 md:h-7 fill-current" fill="true" />
      );
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="control" icon={getVolumeIcon()} />
      </Popover.Trigger>
      <Popover.Content size="1" side="right" align="center" sideOffset={10}>
        <div className="w-44 bg-timberWolf dark:bg-black">
          <NewProgressBar
            value={volume * 100}
            onChange={(newVol) => setVolume(newVol / 100)}
          />
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
