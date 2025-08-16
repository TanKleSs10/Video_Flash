import { AnimatePresence, motion } from "motion/react";
import Header from "./components/Header";
import Player from "./components/player/Player";
import Viewer from "./components/viewer/Viewer";
import NewLibrary from "./components/library/NewLibrary";
import { usePlayerStore } from "./stores/playerStore";

function App() {
  const isOpen = usePlayerStore((state) => state.isOpen);

  return (
    <div className="flex flex-col w-screen h-screen bg-timberWolf dark:bg-black font-Josefin">
      <Header />
      <AnimatePresence>
        <motion.main className="w-full h-full flex items-center md:px-4 gap-4 flex-1 relative overflow-hidden">
          <Viewer />
          {isOpen && <NewLibrary />}
        </motion.main>
      </AnimatePresence>
      <Player />
    </div>
  );
}
export default App;
