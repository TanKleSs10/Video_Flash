import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { tracks } from "../data/track";

// Function to shuffle an array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Initial setup to get the first track and its neighbors
const initialTracks = tracks;
const initialCurrentTrack = initialTracks[0];
const initialPrevTrack = initialTracks[initialTracks.length - 1]; // Last track
const initialNextTrack = initialTracks[1];

export const usePlayerStore = create()(
  devtools((set, get) => ({
    // State
    tracks: initialTracks,
    isPlaying: false,
    isShuffled: false,
    shuffledTracks: [],
    volume: 0.5,
    currentTrack: initialCurrentTrack, // Set to the first track
    viewNextTrack: initialNextTrack, // Set to the second track
    viewPrevTrack: initialPrevTrack, // Set to the last track
    isOpen: false,
    isRepeating: false,

    // Actions
    setIsOpen: (isOpen) => set({ isOpen }),
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    toggleRepeat: () => set((state) => ({ isRepeating: !state.isRepeating })),

    toggleShuffle: () => {
      const { isShuffled, tracks, currentTrack } = get();
      if (!isShuffled) {
        const newShuffledTracks = shuffleArray(tracks);
        set({ isShuffled: true, shuffledTracks: newShuffledTracks });
        if (currentTrack) {
          const newIndex = newShuffledTracks.findIndex(
            (t) => t.id === currentTrack.id,
          );
          get().updateViewTracks(newIndex, newShuffledTracks);
        }
      } else {
        set({ isShuffled: false, shuffledTracks: [] });
        if (currentTrack) {
          const originalIndex = tracks.findIndex(
            (t) => t.id === currentTrack.id,
          );
          get().updateViewTracks(originalIndex, tracks);
        }
      }
    },

    updateViewTracks: (currentIndex, trackList) => {
      const prevTrackIndex =
        (currentIndex - 1 + trackList.length) % trackList.length;
      const nextTrackIndex = (currentIndex + 1) % trackList.length;
      set({
        viewPrevTrack: trackList[prevTrackIndex],
        viewNextTrack: trackList[nextTrackIndex],
      });
    },

    setCurrentTrack: (trackId) => {
      const { tracks, isShuffled, shuffledTracks, updateViewTracks } = get();
      const listToUse = isShuffled ? shuffledTracks : tracks;
      const currentTrackIndex = listToUse.findIndex(
        (track) => track.id === trackId,
      );

      set({
        currentTrack: listToUse[currentTrackIndex],
        isPlaying: true,
      });

      updateViewTracks(currentTrackIndex, listToUse);
    },

    nextTrack: () => {
      const {
        currentTrack,
        tracks,
        isShuffled,
        shuffledTracks,
        setCurrentTrack,
        isRepeating,
      } = get();
      const listToUse = isShuffled ? shuffledTracks : tracks;

      if (isRepeating) {
        setCurrentTrack(currentTrack.id);
      } else {
        const currentTrackIndex = listToUse.findIndex(
          (track) => track.id === currentTrack?.id,
        );
        const nextTrackIndex = (currentTrackIndex + 1) % listToUse.length;
        setCurrentTrack(listToUse[nextTrackIndex].id);
      }
    },

    prevTrack: () => {
      const {
        currentTrack,
        tracks,
        isShuffled,
        shuffledTracks,
        setCurrentTrack,
      } = get();
      const listToUse = isShuffled ? shuffledTracks : tracks;
      const currentTrackIndex = listToUse.findIndex(
        (track) => track.id === currentTrack?.id,
      );
      const prevTrackIndex =
        (currentTrackIndex - 1 + listToUse.length) % listToUse.length;
      setCurrentTrack(listToUse[prevTrackIndex].id);
    },
  })),
);
