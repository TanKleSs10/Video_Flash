import { create } from "zustand";
import { tracks } from "../data/track";
import { devtools } from "zustand/middleware";

export const usePlayerStore = create()(
  devtools((set, get) => ({
    tracks: tracks,
    isPlaying: false,
    volume: 0.5,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    currentTrack: null,
    setCurrentTrack: (trackid) => {
      const { tracks } = get();
      const track = tracks.find((track) => track.id === trackid);
      set({ currentTrack: track });
    },
    nextTrack: () => {
      const { currentTrack, tracks } = get();
      const currentTrackIndex = tracks.findIndex(
        (track) => track.id == currentTrack?.id,
      );
      const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
      set({ currentTrack: tracks[nextTrackIndex] });
    },
    prevTrack: () => {
      const { currentTrack, tracks } = get();
      const currentTrackIndex = tracks.findIndex(
        (track) => track.id == currentTrack?.id,
      );
      const nextTrackIndex =
        currentTrackIndex > 0
          ? (currentTrackIndex - 1) % tracks.length
          : tracks.length - 1;
      set({ currentTrack: tracks[nextTrackIndex] });
    },
  })),
);
