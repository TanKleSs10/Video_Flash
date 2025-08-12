import { create } from "zustand";
import { tracks } from "../data/track";
import { devtools } from "zustand/middleware";

export const usePlayerStore = create()(
  devtools((set, get) => ({
    tracks: tracks,
    isPlaying: false,
    volume: 0.5,
    setVolume: (newVol) => set({ volume: newVol }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    currentTrack: null,
    viewNextTrack: null,
    viewPrevTrack: null,
    setCurrentTrack: (trackid) => {
      const { tracks } = get();

      const track = tracks.find((track) => track.id === trackid);

      const currentTrackIndex = tracks.findIndex(
        (track) => track.id == trackid,
      );
      const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
      const prevTrackIndex =
        currentTrackIndex > 0
          ? (currentTrackIndex - 1) % tracks.length
          : tracks.length - 1;

      console.log(nextTrackIndex, prevTrackIndex);

      set({
        currentTrack: track,
        viewPrevTrack: tracks[prevTrackIndex],
        viewNextTrack: tracks[nextTrackIndex],
        isPlaying: true,
      });
    },
    nextTrack: () => {
      const { currentTrack, tracks, setCurrentTrack } = get();
      const currentTrackIndex = tracks.findIndex(
        (track) => track.id == currentTrack?.id,
      );
      const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;

      setCurrentTrack(tracks[nextTrackIndex].id);
    },
    prevTrack: () => {
      const { currentTrack, tracks, setCurrentTrack } = get();
      const currentTrackIndex = tracks.findIndex(
        (track) => track.id == currentTrack?.id,
      );
      const nextTrackIndex =
        currentTrackIndex > 0
          ? (currentTrackIndex - 1) % tracks.length
          : tracks.length - 1;
      setCurrentTrack(tracks[nextTrackIndex].id);
    },
  })),
);
