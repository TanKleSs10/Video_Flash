### Project Description

The Video Flash Player is a music player designed for Video Flash Productions. The application is built as a Single Page Application (SPA) and offers a fluid and modern user experience, focusing on ease of use and visual aesthetics.

-----

### Key Features

  * **Music Playback**: Play a list of audio tracks.
  * **Playback Controls**: Includes buttons to play/pause, skip tracks, and control volume.
  * **Playback Modes**: Offers shuffle and single-track repeat modes.
  * **Track Visualization**: A central viewer displays the current, next, and previous tracks.
  * **Playlist Management**: A collapsible playlist allows users to view the full track list.
  * **Responsive Design**: The interface adapts to different screen sizes, from mobile devices to desktops.

-----

### Demo

[Live Demo](https://www.google.com/search?q=)

-----

### Technologies Used

  * **React (Vite)**: The main framework for building the user interface, with Vite as the build tool for fast and efficient development.
  * **Tailwind CSS**: A utility-first CSS framework for rapid and customizable styling.
  * **Zustand**: A state management library for efficiently handling global application state (tracks, playback, volume, etc.).
  * **Framer Motion**: An animation library for creating smooth and elegant UI transitions.
  * **Radix UI Themes**: A collection of unstyled UI components, used for accessible elements like the volume control `Popover`.
  * **Lucide React**: A collection of customizable icons for the UI.
  * **Clsx**: A utility for handling conditional CSS classes in a simpler way.
  * **Prop-Types**: A library for prop type validation, which improves code robustness and prevents runtime errors.

-----

### Code Structure

The project is organized in a modular fashion, with separate components handling specific responsibilities:

  * `Viewer`: Displays the main view with track artwork.
  * `Playlist`: Contains the list of all available tracks.
  * `Player`: The footer component that includes all playback controls.
  * `stores`: Folder containing the Zustand store for state management.
  * `components`: Contains reusable components like `Button`, `ProgressBar`, and others.
  * `data`: Stores the audio track data.

-----

### Requirements and Usage

#### Requirements

  * Node.js (version 18 or higher)
  * Bun (an alternative to npm/yarn, used in this project)

#### Installation

1.  Clone the repository:
    `git clone https://github.com/TanKleSs10/Video_Flash.git`
2.  Navigate to the project directory:
    `cd Video_Flash`
3.  Install dependencies with Bun:
    `bun install`
4.  Start the development server:
    `bun run dev`
