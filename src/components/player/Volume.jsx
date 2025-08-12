import Button from "../shared/Button";
import { usePlayerStore } from "../../stores/playerStore";
import NewProgressBar from "../shared/NewProgressBar.jsx";
import { Volume1 } from "lucide-react";

export default function Volume() {
  const { volume, setVolume } = usePlayerStore((state) => state);

  return (
    <div className="grid grid-cols-[auto_1fr] items-center w-52 gap-2">
      <Button
        variant="control"
        icon={<Volume1 className="w-7 h-7 fill-current" fill="true" />}
        onClick={() => setVolume(0)}
      />
      <NewProgressBar
        value={volume * 100}
        onChange={(newVol) => setVolume(newVol / 100)}
      />
    </div>
  );
}
