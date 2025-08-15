import { usePlayerStore } from "../../stores/playerStore";
import Track from "./Track";

export default function NewLibrary() {
  const { tracks, currentTrack, isPlaying } = usePlayerStore((state) => state);
  const currentTrackId = currentTrack?.id;

  return (
    <div className="flex-1 h-full p-4 bg-neutral-900 text-white overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Mi Playlist</h2>
      <div className="space-y-2">
        {tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            isPlaying={currentTrackId === track.id && isPlaying}
          />
        ))}
      </div>
    </div>
  );
}
