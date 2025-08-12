import { usePlayerStore } from "../../stores/playerStore";
import NewTrackCard from "../library/NewTrackCard";

export default function Viewer() {
  const { viewPrevTrack, currentTrack, viewNextTrack } = usePlayerStore(
    (state) => state,
  );
  if (currentTrack)
    return (
      <section className="flex gap-5">
        <NewTrackCard title={viewPrevTrack.name} img={viewPrevTrack.img} />
        <NewTrackCard title={currentTrack.name} img={currentTrack.img} />
        <NewTrackCard title={viewNextTrack.name} img={viewNextTrack.img} />
      </section>
    );
}
